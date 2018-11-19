import { Component, OnInit } from '@angular/core';
import { HomeComponent } from 'src/app/home/home.component';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  constructor(private homeData: HomeComponent) {}

  sidebarItem = [];
  ngOnInit() {
    this.sidebarItem = this.homeData.columns;
  }
}
