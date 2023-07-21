import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ProgressBarComponent } from './progressbar/progressbar.component';
import { FormsModule } from '@angular/forms';
import { AutherListComponent } from './auther-list/auther-list.component';
import { AutherDetailComponent } from './auther-detail/auther-detail.component';
import { ContactImageComponent } from './contact-image/contact-image.component';
import { WitchesComponent } from './witches/witches.component';


@NgModule({
  declarations: [
    AppComponent,
    ProgressBarComponent,
    AutherListComponent,
    AutherDetailComponent,
    ContactImageComponent,
    WitchesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
