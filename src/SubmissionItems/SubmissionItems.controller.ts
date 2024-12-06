import { Controller, Get } from '@nestjs/common';
import { SubmissionItemsService } from './SubmissionItems.service';

@Controller('submissionitems')
export class SubmissionItemsController {
  constructor(private readonly SubmissionItemsService: SubmissionItemsService) {}

  @Get()
  findAll() {
    return this.SubmissionItemsService.findAll();
  }
}
