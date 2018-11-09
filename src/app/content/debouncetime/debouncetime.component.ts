import { Component, OnInit } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import sdk from '@stackblitz/sdk';



@Component({
  selector: 'app-debouncetime',
  templateUrl: './debouncetime.component.html',
  styleUrls: ['./debouncetime.component.scss']
})
export class DebouncetimeComponent implements OnInit {

  constructor() {



   }

  ngOnInit() {
    sdk.embedProjectId("myDiv", "angular-rxjs-debouncetime-turkce", {height:500});

  }


}
