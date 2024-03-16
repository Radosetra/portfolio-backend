import { IsNotEmpty, IsString } from "class-validator";

export class CreateFeedbackDto {
   
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsString()
    email: string;

    @IsString()
    comment: string;

}