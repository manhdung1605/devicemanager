import { IsNotEmpty, Matches, MaxLength, MinLength } from "class-validator";

export class RegisterUserDto {
    @IsNotEmpty()
    username: string;

    @IsNotEmpty()
    @MinLength(6) @MaxLength(12)
    @Matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,12}$/, {
        message: " Password is too weak, choose a stronger password between 6 and 12 character"
    })
    password : string;

}