import { Component, OnInit } from '@angular/core';
import { Subscription, of, Observable, interval, zip} from 'rxjs'
import { groupBy, mergeMap, toArray, concatMap, map, delay, debounceTime } from 'rxjs/operators';
import sdk from '@stackblitz/sdk';


@Component({
  selector: 'app-groupby',
  templateUrl: './groupby.component.html',
  styleUrls: ['./groupby.component.scss']
})
export class GroupbyComponent implements OnInit {

  constructor() { }

  sub: Subscription;
  school;

  ngOnInit() {

    sdk.embedProjectId("myDiv", "angular-rxjs-groupby-turkce", {height:500, devToolsHeight:100});


  }




  }
