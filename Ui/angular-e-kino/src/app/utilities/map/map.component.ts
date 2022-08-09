import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { latLng, LeafletMouseEvent, marker, Marker, tileLayer } from 'leaflet';
import * as Mapboxgl from 'mapbox-gl';
import { environment } from 'src/environments/environment';
import { coordinatesMap,coordinatesMapWithMessage} from './coordinate';



@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements OnInit {
  map!:Mapboxgl.Map;
  constructor() {}

  ngOnInit(): void {
    this.layers = this.initialCoordinates.map((value) => {
      const m = marker([value.latitude, value.longitude]);
     
      return m;
    });
  

 



  
      
  }
  
  
  

 
 
  

  @Input()
  initialCoordinates: coordinatesMap[] = [];

  @Input()
  editMode: boolean = true;

  @Output()
  onSelectedLocation = new EventEmitter<coordinatesMap>();

  options = {
    layers: [
      tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        maxZoom: 18,
        
        id:'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
     accessToken:environment.mapboxKey
      }),
    ],
    zoom: 14,
    center: latLng(43.34828638969954, 17.805190086187128),
  };

  layers: Marker<any>[] = [];

  handleMapClick(event: LeafletMouseEvent) {
    if (this.editMode){
      const latitude = event.latlng.lat;
      const longitude = event.latlng.lng;
      console.log({ latitude, longitude });
      this.layers = [];
      this.layers.push(marker([latitude, longitude]));
      this.onSelectedLocation.emit({ latitude, longitude });
    }
  }
}
