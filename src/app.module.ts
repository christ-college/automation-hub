import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HomeAutomationModule } from './home-automation/home-automation.module';

@Module({
  imports: [HomeAutomationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
