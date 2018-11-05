import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ls {

  constructor(private http: HttpClient) {

  }

   ngOnInit(){

   }

   getFunctions(){
    this.http.get('https://jsonplaceholder.typicode.com/todos/').subscribe(
      data => {
        if(data){
          console.log(data);
        }
      }
    )
   }


}
