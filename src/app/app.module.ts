import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServicesWidgetComponent } from './services-widget/services-widget.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule, MatExpansionModule } from '@angular/material';
import { ServiceTileComponent } from './services-widget/service-tile/service-tile.component';

@NgModule({
  declarations: [
    AppComponent,
    ServicesWidgetComponent,
    ServiceTileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatCardModule
  ],
  exports:[
    MatExpansionModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
