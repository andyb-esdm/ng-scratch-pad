import { Directive, inject, OnInit } from '@angular/core';
import { NG_ASYNC_VALIDATORS, NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[appInspectValidator]',
  standalone: true
})
export class InspectValidatorDirective implements OnInit {
  private validators = inject(NG_VALIDATORS, { self: true, optional: true });
  private asyncValidators = inject(NG_ASYNC_VALIDATORS, { self: true, optional: true });

  ngOnInit(): void {
    if (this.validators && this.validators.length > 0) {
      console.log('Validators on this element:', this.validators);
    } else {
      console.log('No Validators found on this element.');
    }

    if (this.asyncValidators && this.asyncValidators.length > 0) {
      console.log('AsyncValidators on this element:', this.asyncValidators);
    } else {
      console.log('No AsyncValidators found on this element.');
    }
  }

}
