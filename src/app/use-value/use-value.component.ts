import { Component, inject, OnInit } from '@angular/core';
import { LoggerService } from '../logger.service';
import { LegacyLogger } from '../logger.legacy';

@Component({
  selector: 'app-use-value',
  standalone: true,
  imports: [],
  templateUrl: './use-value.component.html',
  styleUrl: './use-value.component.css',
  providers: [
    { provide: LoggerService, useValue: LegacyLogger }
  ]
})
export class UseValueComponent implements OnInit {
  private logger = inject(LoggerService);

  ngOnInit(): void {
    this.logger.log('Use Value');
  }
}
