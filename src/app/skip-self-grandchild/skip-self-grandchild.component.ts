import { Component, inject, OnInit } from '@angular/core';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-skip-self-grandchild',
  standalone: true,
  imports: [],
  templateUrl: './skip-self-grandchild.component.html',
  styleUrl: './skip-self-grandchild.component.css'
})
export class SkipSelfGrandchildComponent implements OnInit {
  private logger = inject(LoggerService)

  ngOnInit(): void {
    this.logger.log('skip-self-grandchild component');
  }
}
