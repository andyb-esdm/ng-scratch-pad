import { Component, inject, OnInit } from '@angular/core';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-self',
  standalone: true,
  imports: [],
  templateUrl: './self.component.html',
  styleUrl: './self.component.css',
  providers: [LoggerService]
})
export class SelfComponent implements OnInit {
  private logger = inject(LoggerService, { self: true });

  ngOnInit(): void {
    this.logger.prefix = 'Self';

    this.logger.log('self component');
  }
}
