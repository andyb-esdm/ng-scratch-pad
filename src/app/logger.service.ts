import { Injectable } from '@angular/core';
import { Logger } from './logger';

@Injectable()
export class LoggerService implements Logger {
  prefix = 'Logger';
  log(message: string) {
    console.log(`${this.prefix}: ${message}`);
  }
}
