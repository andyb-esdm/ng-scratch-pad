import { Component, inject, OnInit } from '@angular/core';
import { APP_CONFIG } from '../config.token';

@Component({
  selector: 'app-injection-token',
  standalone: true,
  imports: [],
  templateUrl: './injection-token.component.html',
  styleUrl: './injection-token.component.css'
})
export class InjectionTokenComponent implements OnInit {
  private appConfig = inject(APP_CONFIG);

  ngOnInit(): void {
    console.log('experimentalEnabled:', this.appConfig.expermientalEnabled);
  }

}
