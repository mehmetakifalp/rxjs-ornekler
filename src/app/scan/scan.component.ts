import { Component, OnInit } from '@angular/core';
import sdk from '@stackblitz/sdk';

@Component({
  selector: 'app-scan',
  templateUrl: './scan.component.html',
})
export class ScanComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    sdk.embedProjectId('stackblitz', 'angular-rxjs-scan', { height: 500, devToolsHeight: 50 });
  }
}
