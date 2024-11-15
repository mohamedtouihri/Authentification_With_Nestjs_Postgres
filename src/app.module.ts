import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { DataSourceOption } from 'db/Data-Source';

@Module({
  imports: [TypeOrmModule.forRoot(DataSourceOption),UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}