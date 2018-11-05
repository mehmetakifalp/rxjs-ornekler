import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl:'home.component.html',
styleUrls: ['home.component.scss']
})
export class HomeComponent {

  rows = [];

  columns = [
    { name: 'Map', description: "Kısa Açıklama 1", id:1},
    { name: 'Of', description: "Kısa Açıklama 2", id:2 },
    { name: 'Subject', description: "Kısa Açıklama 3", id:3 }
  ];

  constructor() {

  }





}
