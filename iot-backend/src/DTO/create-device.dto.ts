import{IsNotEmpty, MaxLength} from "class-validator"
export class CreateDeviceDto{
    @IsNotEmpty()
    @MaxLength(15,{message:"Max length is 15 characters."})
    name : string;   
    @IsNotEmpty()
    imei : string; 
    @IsNotEmpty()
    longtitude : number;
    @IsNotEmpty()
    latitude : number;
    @IsNotEmpty()
    weight : number;
}