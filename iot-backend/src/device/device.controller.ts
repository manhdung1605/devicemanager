import { UserEntity } from './../Entity/user.entity';
import { CreateDeviceDto } from './../DTO/create-device.dto';
import { DeviceService } from './device.service';
import { Body, Controller, Delete, Get, Param, Post, Put, ValidationPipe,UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { User } from 'src/auth/user.decorator';

@Controller('devices')
@UseGuards(AuthGuard())
export class DeviceController {
    
    constructor(private deviceService: DeviceService){}
    @Get()
    getAllDevices(){
         return this.deviceService.getAllDevices();
    }

    @Get(':id')
    getOneDevices(@Param('id') id: number){
         return this.deviceService.getOneDevice(id);
    }

    @Post()
    createNewDevice(@Body(ValidationPipe) data : CreateDeviceDto){
         return this.deviceService.createDevice(data);
    };

    @Put(':id')
    updateDevice(@Param('id') id: number, @Body() data:CreateDeviceDto){
         return this.deviceService.updateDevice(id,data);
    }

    @Delete(':id')
    deleteDevice(@Param('id') id : number){
        return this.deviceService.delete(id);
    };
}
