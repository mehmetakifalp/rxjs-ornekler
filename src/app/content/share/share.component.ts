import { Component, OnInit } from '@angular/core';
import { of, interval, Observable, Subject } from 'rxjs';
import { map, share, tap, mapTo, take, mergeMap, combineLatest } from 'rxjs/operators';

@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.scss']
})
export class ShareComponent implements OnInit {

  dataSource = of({name:'Mehmet', company:'Arneca Teknoloji', title:'Sr. Software Developer'});

  constructor() { }

  ngOnInit() {


    /* const sharedObserver = this.dataSource.pipe(share());

    const example1 = sharedObserver.subscribe( a => {
      console.log("shared example1");
      console.log(a);
    });

    const example2 = sharedObserver.subscribe( a => {
      console.log("shared example2");
      console.log(a);
    }); */

    /*

    const interval$ = interval(1000)
  .pipe(
     tap(console.log),
     mapTo('nextValue'),
     take(2),
     share(),
  );


  const subscription = interval$.subscribe(console.log);

  setTimeout(() => {
    subscription.unsubscribe();
  }, 5000);

    */

}

objectKeys = Object.keys;




notifyData = of([{
  value:"test 1"
}, {
  value:"test 2"
},{
  value:"test 3"
}]);






addNewNotification(newData){


}

}
