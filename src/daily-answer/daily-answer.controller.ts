import { Controller, Get } from '@nestjs/common';
import { DailyAnswerService } from './daily-answer.service';

@Controller('daily-answer')
export class DailyAnswerController {
  constructor(private readonly dailyAnswerService: DailyAnswerService) {}

  @Get()
  async getDailyAnswer() {
    console.log("getting daily answer")
    return this.dailyAnswerService.getDailyAnswer();
  }
}
