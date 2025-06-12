import { Component, inject, OnInit } from '@angular/core';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-self-optional',
  standalone: true,
  imports: [],
  templateUrl: './self-optional.component.html',
  styleUrl: './self-optional.component.css'
})
export class SelfOptionalComponent implements OnInit {
  private logger = inject(LoggerService, { self: true, optional: true });
  ngOnInit(): void {
    this.logger?.log('self-optional component');
  }
}
