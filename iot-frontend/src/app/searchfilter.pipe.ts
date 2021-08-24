import { Devices } from './models/devices';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchfilter'
})
export class SearchfilterPipe implements PipeTransform {

  transform(Devices: Devices[], searchValue : string): Devices[] {
    if(!Devices || !searchValue){
      return Devices;
    }
    return Devices.filter( device =>
      device.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) || 
      device.imei.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()));
  }

}
