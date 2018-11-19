import { Component, OnInit } from '@angular/core';
import { ls } from '../services/jsdata.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss'],
})
export class HomeComponent implements OnInit {
  rows = [];

  columns = [
    { name: 'debounceTime', description: 'debounceTime', id: 1, url: '/debouncetime' },
    { name: 'zip', description: 'zip', id: 2, url: '/zip' },
    { name: 'interval', description: 'Interval', id: 3, url: '/interval' },
    { name: 'range', description: 'Range', id: 4, url: '/range' },
    { name: 'groupBy', description: 'groupBy', id: 5, url: '/groupby' },
    { name: 'combineLatest', description: 'combineLatest', id: 6, url: '/combineLatest' },
    { name: 'fromEvent', description: 'fromEvent', id: 7, url: '/fromEvent' },
    {name: 'share', description: 'share', id:10, url: '/share'},

    { name: 'from', description: 'from', id: 19, url: '/from' },
    { name: 'timer', description: 'timer', id: 20, url: '/timer' },
    { name: 'throwError', description: 'throwError', id: 21, url: '/throwError' },
    { name: 'race', description: 'race', id: 9, url: '/race' },
    { name: 'mapTo', description: 'mapTo', id: 9, url: '/mapTo' },
  ];

  constructor(private jsData: ls) {}

  ngOnInit() {
    this.getRxData();
  }

  rxData: any;
  getRxData() {
    this.rxData = this.jsData.getFunctions();
  }
}
