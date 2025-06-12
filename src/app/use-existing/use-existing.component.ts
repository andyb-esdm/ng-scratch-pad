import { Component, inject, OnInit } from '@angular/core';
import { LoggerService } from '../logger.service';
import { ExperimentalLoggerService } from '../experimental-logger.service';

@Component({
  selector: 'app-use-existing',
  standalone: true,
  imports: [],
  templateUrl: './use-existing.component.html',
  styleUrl: './use-existing.component.css',
  providers: [{
    provide: LoggerService,
    useExisting: ExperimentalLoggerService
  }]
})
export class UseExistingComponent implements OnInit {
  private logger = inject(LoggerService);
  private experimentalLogger = inject(ExperimentalLoggerService);

  ngOnInit(): void {
    this.logger.log('Use Existing');
    this.experimentalLogger.log('Use Existing');

    console.log('Are the intances the same?', this.logger === this.experimentalLogger);
  }

}
