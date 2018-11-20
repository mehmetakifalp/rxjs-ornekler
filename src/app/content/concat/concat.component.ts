import { Component, OnInit } from '@angular/core';
import sdk from '@stackblitz/sdk';

@Component({
  selector: 'app-concat',
  templateUrl: './concat.component.html',
  styleUrls: ['./concat.component.scss']
})
export class ConcatComponent implements OnInit {

  constructor() { }



  ngOnInit() {

  }

  ngAfterContentInit() {
    sdk.embedProjectId('myDiv', 'angular-rxjs-turkce-concat', { height: 500 });
  }


}
