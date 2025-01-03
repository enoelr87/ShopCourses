import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-not-found',
  imports: [RouterModule, ButtonModule, NgOptimizedImage],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.scss',
})
export default class NotFoundComponent {}
