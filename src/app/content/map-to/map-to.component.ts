import { Component, OnInit } from '@angular/core';
import sdk from '@stackblitz/sdk';

@Component({
  selector: 'app-map-to',
  templateUrl: './map-to.component.html',
})
export class MapToComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    sdk.embedProjectId('stackblitz', 'angular-rxjs-mapto', { height: 500 });
  }
}
