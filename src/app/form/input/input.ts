import { Component, input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-input',
  imports: [ReactiveFormsModule],
  templateUrl: './input.html',
  styleUrl: './input.scss',
})
export class Input {
  control = input<FormControl>();
  placeholder = input<string>();
  type = input<string>();
}
