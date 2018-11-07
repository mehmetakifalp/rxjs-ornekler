import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { take } from 'rxjs/operators';
import sdk from '@stackblitz/sdk';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.scss']
})
export class IntervalComponent implements OnInit {


  period:number;
  msDefinition:number;
  subscribtedVar = interval();

  sub: Subscription;

  constructor() { }

  ngOnInit() {
    sdk.embedProjectId("myDiv", "angular-rxjs-interval-turkce", {height:500});
  }


  defineNewInterval(ms){
    this.subscribtedVar = interval(ms);
    this.msDefinition = ms;
    this.startSubscribtion();
  }

  stopInterval(){
    console.log("stop");
    this.sub.unsubscribe();
  }


  startSubscribtion(){
    this.sub =  this.subscribtedVar.subscribe(data => {
      console.log("Every n period : ", data);
      this.period = data;
    });
  }

}
