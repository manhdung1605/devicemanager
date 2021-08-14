import { RegisterUserDto } from './../DTO/registerUser.dto';
import { UserEntity } from './../Entity/user.entity';
import { Injectable, InternalServerErrorException, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcryptjs';
import { UserLoginDto } from './../DTO/userLogin.dto';
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class AuthService {
    constructor(@InjectRepository(UserEntity) private repo: Repository<UserEntity>,
                private jwt: JwtService) {
    }

    async registerUser(registerUserDto: RegisterUserDto) {
        const { username, password } = registerUserDto;
        const hashed = await bcrypt.hash(password, 12);
        const salt = await bcrypt.getSalt(hashed);

        const user = new UserEntity;
        user.password = hashed;
        user.username = username;
        user.salt = salt;

        this.repo.create(user);

        try {
            return await this.repo.save(user);
        } catch (err) {
            throw new InternalServerErrorException('Something went wrong, user was not created');
        }
    }

    async loginUser(userLoginDto: UserLoginDto) {
        const { username, password } = userLoginDto;

        const user = await this.repo.findOne({ username });

        if (!user) {
            throw new UnauthorizedException('Invalid credentials')
        }
        const salt = user.salt;
        const isPasswordMatch = await bcrypt.compare(password, user.password);

        if (isPasswordMatch) {
            const jwtPayLoad = { username };
            const jwtToken = await this.jwt.signAsync(jwtPayLoad,{expiresIn:'1d', algorithm: 'HS512'})
            return { token: jwtToken }
        } else {
            throw new UnauthorizedException('Invalid credentials');
        }
    }
}
