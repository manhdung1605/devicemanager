import { UserEntity } from './user.entity';
import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from "typeorm";

@Entity('devices')
export class DeviceEntity {
    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    name : string;

    @Column()
    imei : string;

    @Column()
    longtitude : number;

    @Column()
    latitude :  number;

    @Column()
    weight :number;

    // @ManyToOne(() => UserEntity, (user: UserEntity) => user.devices )
    // user : UserEntity

    // @Column()
    // userId : number; 

}