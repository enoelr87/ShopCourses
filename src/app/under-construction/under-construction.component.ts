import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-under-construction',
  imports: [RouterModule, ButtonModule, NgOptimizedImage],
  templateUrl: './under-construction.component.html',
  styleUrl: './under-construction.component.scss',
})
export default class UnderConstructionComponent {}
