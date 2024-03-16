import { IsOptional, IsString } from "class-validator";

export class UpdateFeedbackDto {
    @IsOptional()
    @IsString()
    name: string;

    @IsOptional()
    @IsString()
    email: string;

    @IsOptional()
    @IsString()
    comment: string;

}