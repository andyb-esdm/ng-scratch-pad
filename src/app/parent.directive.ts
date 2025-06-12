import { Directive, inject, OnInit } from '@angular/core';
import { LoggerService } from './logger.service';

@Directive({
  selector: '[appParent]',
  standalone: true,
  providers: [LoggerService]
})
export class ParentDirective implements OnInit {

  private logger = inject(LoggerService);

  ngOnInit(): void {
    this.logger.prefix = 'Parent Directive';
    this.logger.log('parent directive');
  }


}
