import { Component, signal } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Input } from '../form/input/input';
import { AuthService } from '../service/auth-response';
import { finalize, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, Input],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class LoginPage {
  constructor(private auth: AuthService) {}
  private destroy$ = new Subject<void>();
  sending = signal<boolean>(false);
  errorMessage = signal<string>('');
  showPassword = signal<boolean>(false);

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });
  onSubmit() {
    if (!this.form.valid || this.sending()) return;
    this.sending.set(true);
    const { email, password } = this.form.value;
    if (!email || !password) {
      this.sending.set(false);
      return;
    }
    this.auth
      .login(email, password)
      .pipe(
        finalize(() => this.sending.set(false)),
        takeUntil(this.destroy$)
      )
      .subscribe({
        next: (res) => {
          console.log('Login successful:', res);
        },
        error: (err) => {
          this.errorMessage.set('Login failed. Please check your credentials.');
        },
      });
  }
}
