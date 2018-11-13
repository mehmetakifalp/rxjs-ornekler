import { Component, AfterContentInit } from '@angular/core';
import sdk from '@stackblitz/sdk';

@Component({
  selector: 'app-throw-error',
  templateUrl: './throw-error.component.html',
})
export class ThrowErrorComponent implements AfterContentInit {
  constructor() {}

  ngAfterContentInit() {
    sdk.embedProjectId('stackblitz', 'angular-rxjs-throwerror', {
      height: 600,
      devToolsHeight: 50,
      hideDevTools: false,
    });
  }
}
