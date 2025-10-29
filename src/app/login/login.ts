import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Input } from '../form/input/input';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, Input],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });
  onSubmit() {
    if (this.form.valid) {
      const email = this.form.value.email;
      const password = this.form.value.password;
      console.log('Email:', email);
      console.log('Password:', password);
    }
  }
}
