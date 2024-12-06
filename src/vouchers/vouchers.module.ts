// src/users/users.module.ts
import { Module } from '@nestjs/common';
import { VoucherService } from './vouchers.service';
import { VoucherController } from './vouchers.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Vouchers } from './entities/vouchers.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Vouchers])], // add this line
  controllers: [VoucherController],
  providers: [VoucherService],
})
export class UsersModule {}