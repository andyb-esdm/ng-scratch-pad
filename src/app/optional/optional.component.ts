import { Component, inject, OnInit } from '@angular/core';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-optional',
  standalone: true,
  imports: [],
  templateUrl: './optional.component.html',
  styleUrl: './optional.component.css'
})
export class OptionalComponent implements OnInit {
  private logger = inject(LoggerService, { optional: true });

  ngOnInit(): void {
    this.logger?.log('optional component');
  }
}
