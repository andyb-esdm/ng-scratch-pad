import { Component, inject, OnInit } from '@angular/core';
import { LoggerService } from '../logger.service';
import { APP_CONFIG, AppConfig } from '../config.token';
import { ExperimentalLoggerService } from '../experimental-logger.service';

@Component({
  selector: 'app-use-factory',
  standalone: true,
  imports: [],
  templateUrl: './use-factory.component.html',
  styleUrl: './use-factory.component.css',
  providers: [{
    provide: LoggerService,
    useFactory: (config: AppConfig) => {
      return config.expermientalEnabled ? new ExperimentalLoggerService() : new LoggerService();
    },
    deps: [APP_CONFIG]
  }]
})
export class UseFactoryComponent implements OnInit {

  private logger = inject(LoggerService);

  ngOnInit(): void {
    this.logger.log('Use Factory');
  }

}
