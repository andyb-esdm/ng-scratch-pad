import { Component } from '@angular/core';
import { Route, RouterLink, RouterLinkActive } from '@angular/router';
import { routes } from '../app.routes';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  protected navRoutes: Route[] = routes.filter(route => !!route.data?.['nav']);

}
