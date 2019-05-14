import { Component } from '@angular/core';
import { ServicesWidgetComponent } from './services-widget/services-widget.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  entryComponents: [ServicesWidgetComponent]
})
export class AppComponent {
  title = 'TESTING';
}
