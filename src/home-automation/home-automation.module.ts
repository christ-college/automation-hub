import { Module } from '@nestjs/common';
import { HomeAutomationController } from './home-automation.controller';
import { HomeAutomationService } from './home-automation.service';

@Module({
  controllers: [HomeAutomationController],
  providers: [HomeAutomationService]
})
export class HomeAutomationModule {}
