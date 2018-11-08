import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './static/header/header.component';
import { HomeComponent } from './home/home.component';
import { ContentComponent } from './content/content.component';
import { DetailComponent } from './home/detail/detail.component';
import { DebouncetimeComponent } from './content/debouncetime/debouncetime.component';
import { ZipComponent } from './content/zip/zip.component';
import { ls } from './services/jsdata.service';
import { HttpClientModule } from '@angular/common/http';
import { IntervalComponent } from './content/interval/interval.component';
import { CombinelatestComponent } from './content/combinelatest/combinelatest.component';
import { FromeventComponent } from './content/fromevent/fromevent.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    HomeComponent,
    DetailComponent,
    DebouncetimeComponent,
    ZipComponent,
    IntervalComponent,
    CombinelatestComponent,
    FromeventComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgxDatatableModule, HttpClientModule],
  providers: [ls],
  bootstrap: [AppComponent],
})
export class AppModule {}
