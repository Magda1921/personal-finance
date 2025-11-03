import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Input } from '../form/input/input';
import { AuthService } from '../service/auth-response';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, Input],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class LoginPage {
  constructor(private auth: AuthService) {}
  sending: boolean = false;
  errorMessage: string = '';

  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });
  onSubmit() {
    if (!this.form.valid || this.sending) return;
    this.sending = true;
    const { email, password } = this.form.value;
    this.auth
      .login(email!, password!)
      .pipe(finalize(() => (this.sending = false)))
      .subscribe({
        next: (res) => {
          console.log('Login successful:', res);
        },
        error: (err) => {
          this.errorMessage = 'Login failed. Please check your credentials.';
        },
      });
  }
}
