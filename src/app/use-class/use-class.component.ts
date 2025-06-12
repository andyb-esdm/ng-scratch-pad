import { Component, inject, OnInit } from '@angular/core';
import { ExperimentalLoggerService } from '../experimental-logger.service';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-use-class',
  standalone: true,
  imports: [],
  templateUrl: './use-class.component.html',
  styleUrl: './use-class.component.css',
  providers: [{
    provide: LoggerService,
    useClass: ExperimentalLoggerService
  }]
})
export class UseClassComponent implements OnInit {
  private logger = inject(LoggerService);
  private experimentalLogger = inject(ExperimentalLoggerService);

  ngOnInit(): void {
    this.logger.prefix = 'Use Class';
    this.logger.log('Use Class');
    this.experimentalLogger.log('Use Class');

    console.log('Are the intances the same?', this.logger === this.experimentalLogger);
  }

}
