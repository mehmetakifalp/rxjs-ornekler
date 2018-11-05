import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './home/detail/detail.component';

const routes: Routes = [
  {path: '', component:HomeComponent, pathMatch:'full'},

  {path: 'detay/:id', component: DetailComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
