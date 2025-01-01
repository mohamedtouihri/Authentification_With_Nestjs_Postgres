import { SeedService } from './seed.service';
import { NestFactory } from '@nestjs/core';
import { AppModule } from 'src/app.module';
import { Logger } from '@nestjs/common';

const seed = async () => {
  const application = await NestFactory.createApplicationContext(AppModule);
  const seeder = application.get(SeedService);

  try {
    seeder.runSeed();
    Logger.log('Seed run successfully');
  } catch (error) {
    Logger.error('Seed run failed', error);
  } finally {
    await application.close();
  }
};

seed();
