import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ProgressBarComponent } from './progressbar/progressbar.component';
import { FormsModule } from '@angular/forms';
import { AutherListComponent } from './auther-list/auther-list.component';
import { AutherDetailComponent } from './auther-detail/auther-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    ProgressBarComponent,
    AutherListComponent,
    AutherDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
