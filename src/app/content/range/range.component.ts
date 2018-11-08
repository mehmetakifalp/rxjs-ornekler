import { Component, OnInit } from '@angular/core';
import { range } from 'rxjs';
import sdk from '@stackblitz/sdk';
@Component({
  selector: 'app-range',
  templateUrl: './range.component.html',
  styleUrls: ['./range.component.scss']
})
export class RangeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    sdk.embedProjectId("myDiv", "angular-rxjs-range-turkce", {height:500});
  }

}
