import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl:'home.component.html',
styleUrls: ['home.component.scss']
})
export class HomeComponent {

  rows = [];

  columns = [
    { name: 'debounceTime', description: "debounceTime", id:1, url: '/debouncetime'},
    { name: 'zip', description: "zip", id:2, url: '/zip' },
    { name: 'Subject', description: "Kısa Açıklama 3", id:3 }
  ];

  constructor() {

  }





}
