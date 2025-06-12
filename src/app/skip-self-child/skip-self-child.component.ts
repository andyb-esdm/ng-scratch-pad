import { Component, inject, OnInit } from '@angular/core';
import { LoggerService } from '../logger.service';
import { SkipSelfGrandchildComponent } from '../skip-self-grandchild/skip-self-grandchild.component';
import { SkipSelfParentComponent } from "../skip-self-parent/skip-self-parent.component";

@Component({
  selector: 'app-skip-self-child',
  standalone: true,
  imports: [SkipSelfGrandchildComponent],
  templateUrl: './skip-self-child.component.html',
  styleUrl: './skip-self-child.component.css',
  providers: [LoggerService]
})
export class SkipSelfChildComponent implements OnInit {
  private parentLogger = inject(LoggerService, { skipSelf: true });
  private childLogger = inject(LoggerService, { self: true });

  ngOnInit(): void {
    this.parentLogger.log('skip-self-child component');
    this.childLogger.prefix = 'Skip Self Child';
    this.childLogger.log('skip-self-child component');
  }

}
