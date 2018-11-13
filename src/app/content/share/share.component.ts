import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { map, share } from 'rxjs/operators';

@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.scss']
})
export class ShareComponent implements OnInit {

  dataSource = of({name:'Mehmet', company:'Arneca Teknoloji', title:'Sr. Software Developer'});

  constructor() { }

  ngOnInit() {


    const sharedObserver = this.dataSource.pipe(share());




}

}
