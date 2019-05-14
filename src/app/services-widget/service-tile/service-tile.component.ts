import { Component, OnInit, Input } from '@angular/core';
import { ServiceTileConfig } from 'src/app/services-widget/ServiceTileConfig';

@Component({
  selector: 'app-service-tile',
  templateUrl: './service-tile.component.html',
  styleUrls: ['./service-tile.component.css']
})
export class ServiceTileComponent implements OnInit {
  @Input() tileConfig: ServiceTileConfig;

  constructor() { }

  ngOnInit() {
  }

}
