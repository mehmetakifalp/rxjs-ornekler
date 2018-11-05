import { Component, OnInit } from '@angular/core';
import { ls } from '../services/jsdata.service';

@Component({
  selector: 'app-home',
  templateUrl:'home.component.html',
styleUrls: ['home.component.scss']
})
export class HomeComponent implements OnInit{

  rows = [];

  columns = [
    { name: 'debounceTime', description: "debounceTime", id:1, url: '/debouncetime'},
    { name: 'zip', description: "zip", id:2, url: '/zip' },
    { name: 'Subject', description: "Kısa Açıklama 3", id:3 }
  ];

  constructor(private jsData: ls) {

  }

  ngOnInit(){
    this.getRxData();
  }


  rxData:any;
  getRxData(){
    this.rxData = this.jsData.getFunctions();
  }





}
