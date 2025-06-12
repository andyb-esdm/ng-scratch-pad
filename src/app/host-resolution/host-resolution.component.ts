import { Component } from '@angular/core';
import { ParentDirective } from '../parent.directive';
import { ChildDirective } from '../child.directive';

@Component({
  selector: 'app-host-resolution',
  standalone: true,
  imports: [ParentDirective, ChildDirective],
  templateUrl: './host-resolution.component.html',
  styleUrl: './host-resolution.component.css'
})
export class HostResolutionComponent {

}
