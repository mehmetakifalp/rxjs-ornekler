import { Component, AfterContentInit } from '@angular/core';
import sdk from '@stackblitz/sdk';

@Component({
  selector: 'app-combinelatest',
  templateUrl: './combinelatest.component.html',
  styles: [``],
})
export class CombinelatestComponent implements AfterContentInit {
  constructor() {}

  ngAfterContentInit() {
    sdk.embedProjectId('myDiv', 'angular-rxjs-combinelatest', { height: 500 });
  }
}
