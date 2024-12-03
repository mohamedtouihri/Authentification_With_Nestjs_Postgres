import { IsNotEmpty, IsString } from "class-validator";

export class CreateCategoryDto {
    @IsNotEmpty({message:'CourseName can not be empty.'})
    @IsString({message:'CourseName should be string.'})
    CourseName:string;
    @IsNotEmpty({message:'DescriptionCourse can not be empty.'})
    @IsString({message:'DescriptionCourse should be string.'})
    DescriptionCourse:string;
}
