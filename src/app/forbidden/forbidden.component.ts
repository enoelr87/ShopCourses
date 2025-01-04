import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-forbidden',
  imports: [RouterModule, ButtonModule, NgOptimizedImage],
  templateUrl: './forbidden.component.html',
  styleUrl: './forbidden.component.scss',
})
export default class ForbiddenComponent {}
