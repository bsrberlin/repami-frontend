import { Component } from '@angular/core';
import { MapComponent } from '../../search-page/map/map.component';

@Component({
  selector: 'map-section',
  standalone: true,
  imports: [MapComponent],
  templateUrl: './map-section.component.html',
  styleUrl: './map-section.component.less'
})

export class MapSectionComponent {

}
