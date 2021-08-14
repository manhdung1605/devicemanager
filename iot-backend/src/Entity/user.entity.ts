import { DeviceEntity } from './device.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn, } from "typeorm";
import * as bcrypt from 'bcryptjs';

@Entity('user')
export class UserEntity {
    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    username : string;

    @Column()
    password : string;

    @Column()
    salt: string;

    // @OneToMany(() => DeviceEntity, (device : DeviceEntity) => device.user )
    // devices : DeviceEntity[]


    // async verifyPassword(password: string){
    //     const hash = await bcrypt.hash(password, this.salt),
    //     return hash === this.password;
    //     return await bcrypt.compare(password, this.password)
    // }
}