// src/users/users.module.ts
import { Module } from '@nestjs/common';
import { VouchersService } from './vouchers.service';
import { VouchersController } from './vouchers.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Vouchers } from './entities/vouchers.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Vouchers])], // add this line
  controllers: [VouchersController],
  providers: [VouchersService],
})
export class VouchersModule {}