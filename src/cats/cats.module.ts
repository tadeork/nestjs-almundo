import { HttpModule, Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';

@Module({
  imports: [HttpModule],
  controllers: [CatsController],
  providers: [CatsService],
})
export class CatsModule {}
