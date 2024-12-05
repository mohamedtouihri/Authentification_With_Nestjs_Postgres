import { IsArray, IsNotEmpty, IsNumber, IsPositive, IsString, Min } from "class-validator";

export class CreateCourseDto {
    @IsNotEmpty({message:'CourseName can not be blank'})
    @IsString()
    CourseName:string;

    @IsNotEmpty({message:'CoursePrice should not be empty.'})
    @IsNumber({maxDecimalPlaces:2},{message:'CoursePrice should be number & max decimal precission 2'})
    @IsPositive({message:'CoursePrice should be positive number'})
    CoursePrice:string;

    @IsNotEmpty({message:'CourseImg should not be empty.'})
    @IsArray({message:'CourseImg should be in array format.'})
    CourseImg:string[];

    @IsNotEmpty({message:'DescriptionCourse can not be empty.'})
    @IsString()
    DescriptionCourse:string;

    @IsNotEmpty({message:'UserNumber should not be empty.'})
    @IsNumber({},{message:'UserNumber should be number' })
    @Min(0,{message:'UserNumber can not be negative.'})
    UserNumber:number;

    @IsNotEmpty({message:'category should not be empty.'})
    @IsNumber({},{message:'category id should be a number' })
    categoryId:number;
}
