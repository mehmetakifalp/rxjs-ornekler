import { Component, OnInit } from '@angular/core';
import sdk from '@stackblitz/sdk';

@Component({
  selector: 'app-race',
  templateUrl: './race.component.html',
  styleUrls: ['./race.component.scss'],
})
export class RaceComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    sdk.embedProjectId('myDiv', 'angular-rxjs-race-turkce', { height: 500 });
  }
}
