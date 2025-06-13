import { Directive, OnInit, inject } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

/**
 * Directive: InspectCvaDirective
 * Logs all ControlValueAccessor implementations provided on the same host element.
 * Usage: <input ngModel inspectCva>
 */
@Directive({
  selector: '[appInspectCva]',
  standalone: true
})
export class InspectCvaDirective implements OnInit {

  private cvas = inject(NG_VALUE_ACCESSOR, { self: true, optional: true });

  ngOnInit(): void {
    if (this.cvas && this.cvas.length > 0) {
      console.log('ControlValueAccessors on this element:', this.cvas);
    } else {
      console.log('No ControlValueAccessor found on this element.');
    }
  }

}
