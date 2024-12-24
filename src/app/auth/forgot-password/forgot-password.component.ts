import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-forgot-password',
  imports: [
    RouterModule,
    FloatLabelModule,
    ButtonModule,
    InputTextModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.scss',
})
export default class ForgotPasswordComponent implements OnInit {
  forgotPasswordForm!: FormGroup;

  ngOnInit(): void {
    this.forgotPasswordForm = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.email]),
    });
  }

  sendUserCode(): void {
    console.log(this.forgotPasswordForm.value);
  }
}
