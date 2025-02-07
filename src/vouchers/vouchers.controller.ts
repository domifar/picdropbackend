import { Controller, Get, Param } from '@nestjs/common';
import { VouchersService } from './vouchers.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

//Zugriff: localhost:3000/vouchers
@ApiTags('vouchers - Controller')
@Controller('vouchers')
export class VouchersController {
  constructor(private readonly vouchersService: VouchersService) {}

  //Get aller Vouchers
  @ApiOperation({
    summary: 'Get all vouchers',
    description: 'Returns all the vouchers available in the database'
  })
  @Get()
  findAll() {
    return this.vouchersService.findAll();
  }

  @ApiOperation({
    summary: 'Get one voucher',
    description: 'Returns the voucher with the specific ID in the database'
  })
  @Get(':id')
  findOne(@Param('id') id:string) {
    return this.vouchersService.findOne(id)
  }
}
