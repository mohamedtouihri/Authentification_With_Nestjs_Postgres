import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { DataSourceOption } from 'db/Data-Source';
import { CurrentUserMiddleware } from './utility/middlewares/current-user.middleware';
import { CategoriesModule } from './categories/categories.module';
import { CoursesModule } from './courses/courses.module';
import { ReviewsModule } from './reviews/reviews.module';
import { SeedModule } from './seed/seed.module';

@Module({
  imports: [TypeOrmModule.forRoot(DataSourceOption),UsersModule, CategoriesModule, CoursesModule, ReviewsModule, SeedModule],
  controllers: [],
  providers: [],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(CurrentUserMiddleware)
      .forRoutes({ path: '*', method: RequestMethod.ALL });
  }
}