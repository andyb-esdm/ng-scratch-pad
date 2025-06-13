import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InspectCvaDirective } from '../inspect-cva.directive';
import { InspectValidatorDirective } from '../inspect-validator.directive';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, InspectCvaDirective, InspectValidatorDirective],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  protected someText = '';
}
