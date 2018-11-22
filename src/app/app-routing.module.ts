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
import { TimerComponent } from './content/timer/timer.component';
import { ThrowErrorComponent } from './content/throw-error/throw-error.component';
import { RaceComponent } from './content/race/race.component';
import { MapToComponent } from './content/map-to/map-to.component';
import { ShareComponent } from './content/share/share.component';
import { StaticandistanceComponent } from './content/staticandistance/staticandistance.component';
import { ScanComponent } from './scan/scan.component';
import { ConcatComponent } from './content/concat/concat.component';
import { MergeComponent } from './content/merge/merge.component';
import { FirstComponent } from './content/first/first.component';
import { ExpandComponent } from './content/expand/expand.component';

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
  { path: 'race', component: RaceComponent},
  { path: 'share', component: ShareComponent},
  { path: 'staticandinstance', component: StaticandistanceComponent},
  { path: 'race', component: RaceComponent },
  { path: 'share', component: ShareComponent },
  { path: 'timer', component: TimerComponent },
  { path: 'throwError', component: ThrowErrorComponent },
  { path: 'race', component: RaceComponent },
  { path: 'mapTo', component: MapToComponent },
  { path: 'scan', component: ScanComponent },
  { path: 'concat', component: ConcatComponent},
  { path: 'merge', component: MergeComponent},
  { path: 'first', component: FirstComponent},
  {path: 'expand', component: ExpandComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
