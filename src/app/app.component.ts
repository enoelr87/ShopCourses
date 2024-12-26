import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SpinnerComponent } from './spinner/spinner.component';
import { httpInterceptorProviders } from './core/interceptors';
import { SpinnerService } from './core/services/spinner.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SpinnerComponent],
  providers: [SpinnerService, httpInterceptorProviders],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'ShopCourses';
}
