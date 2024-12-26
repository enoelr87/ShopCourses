import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-forbidden',
  imports: [RouterModule, ButtonModule],
  templateUrl: './forbidden.component.html',
  styleUrl: './forbidden.component.scss',
})
export default class ForbiddenComponent {}
