import { JwtCustomStrategy } from './jwt-custom.strategy';
import { UserEntity } from './../Entity/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserEntity]),
    JwtModule.register({
      secret: 'sadflasudfg7astf98698769876',
      signOptions: {
        algorithm: 'HS512',
        expiresIn: '1d',
      }
    }),
    PassportModule.register({
      defaultStrategy: 'jwt'
    })
  ],
  providers: [AuthService, JwtCustomStrategy],
  controllers: [AuthController],
  exports: [PassportModule, JwtCustomStrategy]
})
export class AuthModule { }
