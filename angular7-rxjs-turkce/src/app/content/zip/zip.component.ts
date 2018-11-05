import { Component, OnInit } from '@angular/core';
import { Observable, zip, of } from 'rxjs';

@Component({
  selector: 'app-zip',
  templateUrl: './zip.component.html',
  styleUrls: ['./zip.component.scss']
})
export class ZipComponent implements OnInit {



  first = of("mehmet");
  second = of("akif");
  third = of("alp");
  zipped$ = of("");


  constructor() { }

  ngOnInit() {


    this.zipped$.pipe(zip(
      this.first,
      this.second,
      this.third
    ).subscribe(
      e => {
        console.log(e);
      }
    ));


  }

}
