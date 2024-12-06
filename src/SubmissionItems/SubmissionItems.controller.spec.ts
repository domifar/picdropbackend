import { Test, TestingModule } from '@nestjs/testing';
import { SubmissionItemsController } from './SubmissionItems.controller';
import { SubmissionItemsService } from './SubmissionItems.service';

describe('SubmissionItemsController', () => {
  let controller: SubmissionItemsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SubmissionItemsController],
      providers: [SubmissionItemsService],
    }).compile();

    controller = module.get<SubmissionItemsController>(SubmissionItemsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
