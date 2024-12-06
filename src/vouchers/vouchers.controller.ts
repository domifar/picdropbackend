import { Controller, Get, Param } from '@nestjs/common';
import { VoucherService } from './vouchers.service';

@Controller('vouchers')
export class VoucherController {
  constructor(private readonly vouchersService: VoucherService) {}

  @Get()
  findAll() {
    return this.vouchersService.findAll();
  }

  // @Get(':Id')
  // findOne(@Param('Id') id: string) {
  //   return this.usersService.findOne(+id);
  // }
}
