import { Component, AfterContentInit } from '@angular/core';
import sdk from '@stackblitz/sdk';

@Component({
  selector: 'app-from',
  templateUrl: './from.component.html',
  styles: [``],
})
export class FromComponent implements AfterContentInit {

  constructor() {}

  ngAfterContentInit() {
    sdk.embedProjectId('stackblitz', 'angular-rxjs-from', {
      height: 600,
      devToolsHeight: 50,
      hideDevTools: false,
    });
  }
}
