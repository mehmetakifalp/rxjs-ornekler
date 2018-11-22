import { Component, OnInit } from '@angular/core';
import { Observable, range, from, of } from 'rxjs';
import { first } from 'rxjs/operators';
import sdk from '@stackblitz/sdk';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    sdk.embedProjectId("myDiv", "angular-rxjs-turkce-first", {height:500});

    const source = of(1, 2, 3, 4, 5);
    const example = source.pipe(first(val => val < 5));
    const subscribe = example.subscribe(val => console.log(`First value: ${val}`));

  }

}
