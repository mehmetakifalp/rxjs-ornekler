import { Component, OnInit } from '@angular/core';
import { fromEvent, Observable, of, BehaviorSubject, Subject } from 'rxjs';
import { tap, map, debounceTime, distinctUntilChanged} from 'rxjs/operators'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {


  constructor() {

   }

  ngOnInit(): void {
  }








}
