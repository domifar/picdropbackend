import { Test, TestingModule } from '@nestjs/testing';
import { VoucherController } from './vouchers.controller';
import { VoucherService } from './vouchers.service';

describe('VoucherController', () => {
  let controller: VoucherController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VoucherController],
      providers: [VoucherService],
    }).compile();

    controller = module.get<VoucherController>(VoucherController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
