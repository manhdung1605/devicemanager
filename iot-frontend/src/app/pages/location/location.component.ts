import { Component, OnInit } from '@angular/core';
import { mapboxKey } from './../../../environments/environment.prod';;
//import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { Devices } from '../../models/devices';
import { NzMessageService } from 'ng-zorro-antd/message';
import * as mapboxgl from 'mapbox-gl';
@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

  constructor(private api: ApiService) { }
  devices: Devices[] = [];
  device: Devices = new Devices();
  lng !: number;
  lat !: number;

  ngOnInit() {


    (mapboxgl as any).accessToken = 'pk.eyJ1IjoibWFuaGR1bmcxNjA1IiwiYSI6ImNrc2Zlam1ndzE5dGEyb3AzaW81OWRhYnMifQ.XnCvLFE_lS8kEsNfsxZe6g';
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [105.801944, 21.0228161],
      zoom: 16.6,
    });

    const marker1 = new mapboxgl.Marker({ color: 'red' })
      .setLngLat([105.801844, 21.0228161])
      .addTo(map);
    const marker2 = new mapboxgl.Marker({ color: 'red' })
      .setLngLat([105.801944, 21.0228161])
      .addTo(map);
    this.getAllDevices();
    this.getOneDevice(1);

    
  }
  getOneDevice(id: number) {
    this.api.getOneDevice(id).subscribe(
      data => {
        this.devices = data;
        console.log(data)
        
      },
      err => {
        console.log(err);
      }
    );
  }
  getAllDevices() {
    this.api.getAllDevices().subscribe(
      data => {
        this.devices = data;
        console.log(data);
         
      },
      err => {
        console.log(err);
      }
    );
  }


}


