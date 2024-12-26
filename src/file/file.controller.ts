import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';
import { join } from 'path';

@Controller('file')
export class FileController {
  @Get('image')
  getExampleImage(@Res() res: Response) {
    const imagePath = join(__dirname, '..', 'public', 'Assets', 'Images', 'Course_Marketing.png');
    res.sendFile(imagePath);
  }
}
