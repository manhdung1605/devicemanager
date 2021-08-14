import { UserLoginDto } from './../DTO/userLogin.dto';
import { RegisterUserDto } from './../DTO/registerUser.dto';
import { AuthService } from './auth.service';
import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { pseudoRandomBytes } from 'crypto';

@Controller('auth')

export class AuthController {

    constructor(private authService : AuthService){

    }
    @Post('register')
    registration(@Body(ValidationPipe) data: RegisterUserDto){
       return this.authService.registerUser(data);
    }
    @Post('login')
    signin(@Body(ValidationPipe) data: UserLoginDto){
        return this.authService.loginUser(data)
    }
}
