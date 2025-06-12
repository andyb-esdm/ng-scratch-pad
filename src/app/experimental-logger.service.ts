import { inject, Injectable } from '@angular/core';
import { Logger } from './logger';
import { APP_CONFIG, AppConfig } from './config.token';

@Injectable({
  providedIn: 'root'
})
export class ExperimentalLoggerService implements Logger {
  prefix = 'root';

  log(message: string) { console.log(`${this.prefix} (experimental): ${message}`); }

  private config: AppConfig = inject(APP_CONFIG);

  constructor() {
    console.log(this.config.expermientalEnabled);
  }
}
