import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './home/detail/detail.component';
import { DebouncetimeComponent } from './content/debouncetime/debouncetime.component';
import { ZipComponent } from './content/zip/zip.component';
import { IntervalComponent } from './content/interval/interval.component';
import { CombinelatestComponent } from './content/combinelatest/combinelatest.component';
import { FromeventComponent } from './content/fromevent/fromevent.component';
import { RangeComponent } from './content/range/range.component';
import { GroupbyComponent } from './content/groupby/groupby.component';
import { FromComponent } from './content/from/from.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },

  { path: 'detay/:id', component: DetailComponent },

  { path: 'debouncetime', component: DebouncetimeComponent },

  { path: 'zip', component: ZipComponent },
  { path: 'interval', component: IntervalComponent },
  { path: 'range', component: RangeComponent },
  { path: 'groupby', component: GroupbyComponent },

  { path: 'combineLatest', component: CombinelatestComponent },
  { path: 'fromEvent', component: FromeventComponent },
  { path: 'from', component: FromComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
