import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.scss']
})
export class IntervalComponent implements OnInit {


  period:number;
  msDefinition:number;
  subscribtedVar = interval();
  constructor() { }

  ngOnInit() {


  }


  defineNewInterval(ms){
    this.subscribtedVar = interval(ms).pipe(take(2));
    this.msDefinition = ms;
    this.startSubscribtion();
  }


  startSubscribtion(){
    this.subscribtedVar.subscribe(data => {
      console.log("Every n period : ", data);
      this.period = data;
    });
  }

}
