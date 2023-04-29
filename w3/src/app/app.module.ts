import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { BandComponent } from './band/band.component';
import { TourComponent } from './tour/tour.component';
import { TicketComponent } from './ticket/ticket.component';

import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SlideshowComponent,
    BandComponent,
    TourComponent,
    TicketComponent,
    
    FooterComponent,
         ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
