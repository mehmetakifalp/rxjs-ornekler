import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './home/detail/detail.component';
import { DebouncetimeComponent } from './content/debouncetime/debouncetime.component';
import { ZipComponent } from './content/zip/zip.component';

const routes: Routes = [
  {path: '', component:HomeComponent, pathMatch:'full'},

  {path: 'detay/:id', component: DetailComponent},

  {path: 'debouncetime', component: DebouncetimeComponent}


  {path: 'zip', component: ZipComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
