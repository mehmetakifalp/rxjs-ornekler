import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {


  constructor(private route:ActivatedRoute) { }

  selectedId;
  ngOnInit(): void {
    this.route.params.subscribe(data => {
      this.selectedId = data.id;
    })
  }
}
