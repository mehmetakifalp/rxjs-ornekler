import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-debouncetime',
  templateUrl: './debouncetime.component.html',
  styleUrls: ['./debouncetime.component.scss']
})
export class DebouncetimeComponent implements OnInit {

  dataList$ = new Subject<string>();

  constructor() {

    this.dataList$.pipe(debounceTime(1000)).subscribe(
      d => {
        console.log(d);
      }
    )

   }

  ngOnInit() {
  }

  makeSearch(value){
    this.dataList$.next(value);
   }


}
