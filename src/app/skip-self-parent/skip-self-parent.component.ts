import { Component, inject, OnInit } from '@angular/core';
import { SkipSelfChildComponent } from '../skip-self-child/skip-self-child.component';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-skip-self',
  standalone: true,
  imports: [SkipSelfChildComponent],
  templateUrl: './skip-self-parent.component.html',
  styleUrl: './skip-self-parent.component.css',
  providers: [LoggerService]
})
export class SkipSelfParentComponent implements OnInit {
  private logger = inject(LoggerService);

  ngOnInit(): void {
    this.logger.prefix = 'Skip Self Parent';
    this.logger.log('skip-self-parent component');
  }

}
