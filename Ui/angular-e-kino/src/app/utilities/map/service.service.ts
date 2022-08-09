import { Injectable } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  map!: mapboxgl.Map;

  style = 'mapbox://styles/mapbox/streets-v11';
lat = 45.899977;
lng = 6.172652;
zoom = 12

  constructor() {
   (mapboxgl as any).access_token
   }
}
