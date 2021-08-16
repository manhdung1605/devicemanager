import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { HttpClient } from '@angular/common/http';
import { Devices } from '../../models/devices';
import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
@Component({
  selector: 'app-statistic',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  devices: Devices[] = [];
  device: Devices = new Devices();
  filteredDevices: any[] = [];
  form  !: FormGroup;
  showAdd !: boolean;
  showUpdate !: boolean;
  visible = false;
  constructor(private api: ApiService, private fb: FormBuilder, private message: NzMessageService) { }

  ngOnInit() {
    // this.api.getAllDevices().subscribe((data) => {
    //   this.devices = data;
    //   this.filteredDevices = this.devices;
    // });
    this.form = this.fb.group({
      id: [0],
      name: [''],
      imei: [''],
      weight: [0],
      longtitude: [0],
      latitude: [0],
    })
    this.getAllDevices();
  }
  getAllDevices() {
    this.api.getAllDevices().subscribe(
      data => {
        this.devices = data;
      },
      err => {
        console.log(err);
      }
    );
  }
  delete(id: number) {
    if (confirm('Bạn muốn xóa thiết bị này?')) {
      this.api.deleteDevice(id).subscribe(res => {

        // @ts-ignore
        this.devices = this.devices.filter((t: any) => t.id !== id);
        // this.filteredDevices = this.devices;
        this.getAllDevices();
      });
    }
  }
  createDevice() {

    this.api.postDevice(
      this.form.value.name,
      this.form.value.imei,
      this.form.value.weight,
      this.form.value.longtitude,
      this.form.value.latitude).subscribe(res => {
        console.log(res);
        this.message.create('success', 'Thêm thiết bị thành công');
        this.form.reset();
        this.getAllDevices()
      },
        err => {
          console.log("Thêm thiết bị lỗi")
        })
  }
  updateDevice() {
    this.api.putDevice(
      this.form.value.id,
      this.form.value.name,
      this.form.value.imei,
      this.form.value.weight,
      this.form.value.longtitude,
      this.form.value.latitude).subscribe(res => {
        console.log(res);
        this.message.create('success', 'Cập nhật thiết bị thành công');
        this.form.reset();
        this.getAllDevices()
      },
        err => {
          console.log("Chỉnh sửa thiết bị lỗi")
        })
  }


  addDevice(): void {
    this.visible = true;
    this.showUpdate = false;
    this.showAdd = true;
  }

  close(): void {
    this.visible = false;
  }
  onEdit(device: any) {
    this.visible = true;
    this.showUpdate = true;
    this.showAdd = false;
    this.form.controls['id'].setValue(device.id);
    this.form.controls['name'].setValue(device.name);
    this.form.controls['imei'].setValue(device.imei);
    this.form.controls['weight'].setValue(device.weight);
    this.form.controls['longtitude'].setValue(device.longtitude);
    this.form.controls['latitude'].setValue(device.latitude);
  }
}
