import { Component, OnInit } from '@angular/core';
import { of, concat } from 'rxjs';

@Component({
  selector: 'app-concat',
  templateUrl: './concat.component.html',
  styleUrls: ['./concat.component.scss']
})
export class ConcatComponent implements OnInit {

  constructor() { }



  ngOnInit() {

    this.createData();
  }


}
