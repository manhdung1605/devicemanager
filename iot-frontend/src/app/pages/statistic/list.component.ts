import { ApiService } from '../../services/api.service';
import { HttpClient } from '@angular/common/http';
import { Devices } from '../../models/devices';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-statistic',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  devices : Devices[] = [];
  constructor(private api : ApiService) { }

  ngOnInit() {
    this.cargarDevice();
  }
  cargarDevice(){
    this.api.getAllDevices().subscribe(
      data => {
        this.devices = data;
      },
      err => {
        console.log(err);
      }
    );
  }

}
