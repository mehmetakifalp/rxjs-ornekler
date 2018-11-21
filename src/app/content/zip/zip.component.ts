import { Component, OnInit } from '@angular/core';
import { Observable, zip, of, interval } from 'rxjs';
import { delay, mapTo, take } from 'rxjs/operators';
import sdk from '@stackblitz/sdk';


@Component({
  selector: 'app-zip',
  templateUrl: './zip.component.html',
  styleUrls: ['./zip.component.scss']
})
export class ZipComponent implements OnInit {




  constructor() { }

  ngOnInit() {


/*
    this.zipped$.pipe(zip(
      this.first,
      this.second,
      this.third
    ).subscribe(
      e => {
        console.log(e);
      }
    ));

*/
  }


  // angular-rxjs-turkce-zip

  ngAfterContentInit() {
    sdk.embedProjectId('myDiv', 'angular-rxjs-turkce-zip', { height: 500 });
  }

}
