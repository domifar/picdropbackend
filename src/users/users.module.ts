// src/users/users.module.ts
import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Vouchers } from './entities/vouchers.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Vouchers])], // add this line
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}