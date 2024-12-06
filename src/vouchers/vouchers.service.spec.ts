import { Test, TestingModule } from '@nestjs/testing';
import { VoucherService } from './vouchers.service';

describe('UsersService', () => {
  let service: VoucherService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VoucherService],
    }).compile();

    service = module.get<VoucherService>(VoucherService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
