import { Component, OnInit } from '@angular/core';
import { delay } from 'rxjs/operators';
import { merge } from 'rxjs';

@Component({
  selector: 'app-merge',
  templateUrl: './merge.component.html',
  styleUrls: ['./merge.component.scss']
})
export class MergeComponent implements OnInit {

  constructor() { }

  ngOnInit() {


    const first = delay(1000);
    const second = delay(1500);
    const third = delay(2000);
    const fourth = delay(2000);



    const mergeObs = merge(
      first,second,third,fourth
    );

    mergeObs.subscribe(
      data => {
        console.log(data);
      }
    )
  }

}
