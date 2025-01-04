import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthService } from '../core/services/auth.service';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-auth',
  imports: [RouterOutlet, NgOptimizedImage],
  providers: [AuthService],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss',
})
export default class AuthComponent {}
