import { Component, inject } from '@angular/core';
import { SpinnerService } from '../core/services/spinner.service';
import { CommonModule, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-spinner',
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './spinner.component.html',
  styleUrl: './spinner.component.scss',
})
export class SpinnerComponent {
  spinnerService = inject(SpinnerService);

  keyLogo!: string;
  logo!: string;
  color!: string;
}
