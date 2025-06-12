import { Directive, inject, OnInit } from '@angular/core';
import { LoggerService } from './logger.service';

@Directive({
  selector: '[appChild]',
  standalone: true
})
export class ChildDirective implements OnInit {

  private logger = inject(LoggerService, { host: true });
  ngOnInit(): void {
    this.logger.log('child directive');
  }

}
