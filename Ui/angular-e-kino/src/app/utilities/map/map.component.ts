import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { latLng, LeafletMouseEvent, marker, Marker, tileLayer } from 'leaflet';
import { coordinatesMap,coordinatesMapWithMessage} from './coordinate';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
   this.layers = this.initialCoordinates.map(value => marker([value.latitude,value.longitude]));
      
  }

  @Input()
  initialCoordinates: coordinatesMap[] = [];

  @Input()
  editMode: boolean = true;

  @Output()
  onSelectedLocation = new EventEmitter<coordinatesMap>();

  options = {
    layers: [
      tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: 'Angular E-Kino',
      }),
    ],
    zoom: 14,
    center: latLng(43.34828638969954, 17.805190086187128),
  };

  layers: Marker<any>[] = [];

  handleMapClick(event: LeafletMouseEvent) {
    //if (this.editMode){
      const latitude = event.latlng.lat;
      const longitude = event.latlng.lng;
      console.log({ latitude, longitude });
      this.layers = [];
      this.layers.push(marker([latitude, longitude]));
      this.onSelectedLocation.emit({ latitude, longitude });
    }
 // }
}
