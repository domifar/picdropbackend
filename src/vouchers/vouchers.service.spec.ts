import { Test, TestingModule } from '@nestjs/testing';
import { VouchersService } from './vouchers.service';

describe('UsersService', () => {
  let service: VouchersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VouchersService],
    }).compile();

    service = module.get<VouchersService>(VouchersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
