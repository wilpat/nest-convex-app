import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConvexService } from './convex/convex.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, ConvexService],
})
export class AppModule {}
