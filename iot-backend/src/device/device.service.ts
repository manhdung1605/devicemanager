import { UserEntity } from './../Entity/user.entity';
import { CreateDeviceDto } from './../DTO/create-device.dto';
import { DeviceEntity } from './../Entity/device.entity';
import { Injectable, InternalServerErrorException, NotFoundException, ValidationPipe } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { identity } from 'rxjs';
@Injectable()
export class DeviceService {
    
    constructor(@InjectRepository(DeviceEntity) private repo: Repository<DeviceEntity>){

    }
    async getAllDevices(){     
        try {
            return await this.repo.find();
        } catch (error) {
            throw new InternalServerErrorException('something wrong')           
        }
        // return await this.repo.find();
    };

    async getOneDevice(id : number){
        try {
            return await this.repo.find({id});
        } catch (error) {
            throw new InternalServerErrorException ('Something wrong')
        }        
    };


    async updateDevice(id: number ,createDeviceDto: CreateDeviceDto){
        const device : DeviceEntity = new DeviceEntity();
        const {name, longtitude, latitude, weight,imei} = createDeviceDto;

        device.latitude = latitude;
        device.longtitude = longtitude;
        device.name = name;
        device.weight = weight;
        device.imei = imei;
       
        return await this.repo.update({id}, device);
    };



    async createDevice(createDeviceDto: CreateDeviceDto):Promise<DeviceEntity>{
        const device : DeviceEntity = new DeviceEntity();
        const {name, longtitude, latitude, weight, imei} = createDeviceDto;

        device.latitude = latitude;
        device.longtitude = longtitude;
        device.name = name;
        device.weight = weight;
        device.imei = imei;


        this.repo.create(device);
        return await this.repo.save (device);
    };

    async delete (id : number):Promise<any >{
        try {
            return await this.repo.delete({id});
        } catch (err) {
            throw new InternalServerErrorException('Something wrong in delete');
        }
    }
}