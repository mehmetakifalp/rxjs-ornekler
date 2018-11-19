import { Component, OnInit, ViewChild, AfterContentInit, ElementRef, AfterViewInit } from '@angular/core';
import { fromEvent, of } from 'rxjs';


@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.scss']
})
export class ShareComponent implements AfterViewInit {

  dataSource = of({name:'Mehmet', company:'Arneca Teknoloji', title:'Sr. Software Developer'});

  constructor() { }






notifyData = of([{
  value:"test 1"
}, {
  value:"test 2"
},{
  value:"test 3"
}]);


@ViewChild('app') myApp;


ngAfterViewInit() {
    const click$ = fromEvent(this.myApp, 'click');
    const sub1 = click$.subscribe(val => {
      console.log('sub1:', val);
    });



    const sub2 = click$.subscribe(val => {
      console.log('sub2:', val);
    });

}






}
