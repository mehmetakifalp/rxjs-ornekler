import { Component, AfterContentInit } from '@angular/core';
import sdk from '@stackblitz/sdk';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
})
export class TimerComponent implements AfterContentInit {
  constructor() {}

  ngAfterContentInit() {
    sdk.embedProjectId('stackblitz', 'angular-timer-rxjs', {
      height: 600,
      devToolsHeight: 50,
      hideDevTools: false,
    });
  }
}
