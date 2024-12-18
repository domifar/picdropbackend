// src/users/users.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Vouchers } from './entities/vouchers.entity';
import { Repository } from 'typeorm';

@Injectable()
export class VouchersService {
  constructor(
    @InjectRepository(Vouchers) private userRepository: Repository<Vouchers>,
  ) {}

  async findAll(): Promise<Vouchers[]> {
    return await this.userRepository.find();
  }
}