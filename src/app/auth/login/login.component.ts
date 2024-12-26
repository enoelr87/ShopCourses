import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { RecaptchaModule, RecaptchaFormsModule } from 'ng-recaptcha';
import { environment } from '../../../environments/environment';
import { AuthService } from '../../core/services/auth.service';
import { LoginUserDto } from '../../core/models/user.model';

@Component({
  selector: 'app-login',
  imports: [
    CommonModule,
    RouterModule,
    ButtonModule,
    FloatLabelModule,
    InputTextModule,
    PasswordModule,
    ReactiveFormsModule,
    RecaptchaModule,
    RecaptchaFormsModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export default class LoginComponent implements OnInit {
  private authService = inject(AuthService);
  private router = inject(Router);

  apiKey: string = environment.apiKeyCaptchaV2;
  loginForm!: FormGroup;
  captcha = 'INVALID';

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }

  onCaptchaResolved(captchaResponse: string | null): void {
    if (captchaResponse) {
      this.captcha = 'VALID';
    }
  }

  loginUser(): void {
    if (this.loginForm.valid) {
      const user: LoginUserDto = {
        username: this.loginForm.value.username,
        password: this.loginForm.value.password,
      };
      this.authService.loginUser(user).subscribe((data) => {
        console.info(data);
        // localStorage.setItem('accessToken', data.accessToken);
        this.router.navigate(['dashboard']);
      });
    }
  }
}
