import { Component, AfterContentInit } from '@angular/core';
import sdk from '@stackblitz/sdk';

@Component({
  selector: 'app-fromevent',
  templateUrl: './fromevent.component.html',
  styles: [``],
})
export class FromeventComponent implements AfterContentInit {
  constructor() {}

  ngAfterContentInit() {
    sdk.embedProjectId('stackblitz', 'angular-rxjs-fromevent', {
      height: 600,
      devToolsHeight: 50,
      hideDevTools: false,
    });
  }
}
