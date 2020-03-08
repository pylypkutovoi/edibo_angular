import { Module } from '@nestjs/common';
import { CatsController } from './api/cats/cats.controller';
import { CatsService } from './services/cats/cats.service';
import { DatabaseModule } from 'src/database/database.module';
import { catsProviders } from './cats.provider';


@Module({

  imports: [DatabaseModule],
  controllers: [CatsController],
  providers: [
    CatsService,
    ...catsProviders
  ]
})
export class CatsModule {}

