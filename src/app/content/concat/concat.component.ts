import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { concat } from 'rxjs/operators';

@Component({
  selector: 'app-concat',
  templateUrl: './concat.component.html',
  styleUrls: ['./concat.component.scss']
})
export class ConcatComponent implements OnInit {

  constructor() { }



  ngOnInit() {


  }


  createData(){
    const dataFromProvider = of(["Mehmet", "Akif", "Alp", "Developer"]);
    const dataFromOtherProvider = of(["Rastmobile.com", "Angular7", "Android", "Web development", "Rxjs"]);

    const concattedData = dataFromProvider.pipe(concat(dataFromOtherProvider));


    const servDatas = concattedData.subscribe(datas => {
      console.log(datas);
    })
  }
}
