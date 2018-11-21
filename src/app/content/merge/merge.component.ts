import { Component, OnInit } from '@angular/core';
import { delay, mapTo, take } from 'rxjs/operators';
import { merge, interval } from 'rxjs';
import sdk from '@stackblitz/sdk';

@Component({
  selector: 'app-merge',
  templateUrl: './merge.component.html',
  styleUrls: ['./merge.component.scss']
})
export class MergeComponent implements OnInit {

  constructor() { }

  results =  [];

  ngOnInit() {

    /*
    const first = interval(1000).pipe(mapTo('first Observable every 1000 ms - will work 2 times only '), take(2));
    const second = interval(1500).pipe(mapTo('second Observable every 1500 ms - will work 4 times only '), take(4));
    const third = interval(2000).pipe(mapTo('third Observable every 2000 ms - will work 6 times only '), take(6));
    const fourth = interval(2500).pipe(mapTo('fourth Observable every 2500 ms -  will work 8 times only '), take(8));
    const mergeObs = merge(
      first,second,third,fourth
    );
    mergeObs.subscribe(
      data => {
        console.log(data);
        this.results.push(data);
      }
    )
    */
  }

  ngAfterContentInit() {
    sdk.embedProjectId('myDiv', 'angular-rxjs-merge-turkce', { height: 500 });
  }

}
