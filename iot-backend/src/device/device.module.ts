import { AuthModule } from './../auth/auth.module';
import { DeviceEntity } from './../Entity/device.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DeviceController } from './device.controller';
import { DeviceService } from './device.service';


@Module({
  imports:[
    TypeOrmModule.forFeature([DeviceEntity]),
    AuthModule,
  ],
  controllers: [DeviceController],
  providers: [DeviceService]
})
export class DeviceModule {}
