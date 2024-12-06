import { IsNotEmpty, IsNumber } from "class-validator";

export class CreateReviewDto {
    @IsNotEmpty({message:'Course should not be empty.'})
    @IsNumber({},{message:'Course Id should be number '})
    courseId:number;
    @IsNotEmpty({message:'ratings could not be empty.'})
    @IsNumber()
    ratings:number;
}
