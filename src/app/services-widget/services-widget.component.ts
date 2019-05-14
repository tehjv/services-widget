import { Component, OnInit } from '@angular/core';
import { testData } from './testConfig.data';
import { ServiceTileConfig } from './ServiceTileConfig';

@Component({
  selector: 'app-services-widget',
  templateUrl: './services-widget.component.html',
  styleUrls: ['./services-widget.component.css'],
})


export class ServicesWidgetComponent implements OnInit {
  servicesConfig: Array<ServiceTileConfig>;
  categories: Array<String> = [];

  constructor() {
    // this.config = fetch(`${location.href}getConfig`).then((data) => data.json).catch(() => testData);
    this.servicesConfig = testData;
    console.log('CONFIG!')
    console.log(this.servicesConfig)
    this.categories.push('All')
    new Set(this.servicesConfig.map(e => e.category)).forEach(e => this.categories.push(e));
    console.log(this.categories)
  }

  ngOnInit() {

  }

}
