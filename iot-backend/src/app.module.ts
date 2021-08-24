import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DeviceModule } from './device/device.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { config } from 'dotenv';
config()
const ormOptions: TypeOrmModuleOptions = {
  type: 'postgres',
  url: 'postgres://uozxicyzopixee:b96bfe8e03523e3917c1c40ae8317b019acbc1c6eb46fe5b69935e6f30cf942d@ec2-35-169-188-58.compute-1.amazonaws.com:5432/da9jdbhaifu3nf',
//  host: 'ec2-35-169-188-58.compute-1.amazonaws.com',
  extra:{
    ssl:{
      rejectUnauthorized: false
    }
  },
//  username:  'uozxicyzopixee',
//  password:   'b96bfe8e03523e3917c1c40ae8317b019acbc1c6eb46fe5b69935e6f30cf942d',
//  database: 'ida9jdbhaifu3nf',
  autoLoadEntities: true,
  synchronize: true,

};
@Module({
  imports: [      
    ConfigModule.forRoot({ isGlobal:true}),
    DeviceModule,
    TypeOrmModule.forRoot(ormOptions),
    AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
