import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DeviceModule } from './device/device.module';
import { AuthModule } from './auth/auth.module';

const ormOptions: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '123456', 
  database: 'smart-iot',
  autoLoadEntities: true,
  synchronize: true,

};
@Module({
  imports: [
    DeviceModule,
    TypeOrmModule.forRoot(ormOptions),
    AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
