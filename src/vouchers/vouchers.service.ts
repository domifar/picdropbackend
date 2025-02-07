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

  //alle vouchers aus der Datenbank zurückgeben
  async findAll(): Promise<Vouchers[]> {
    return await this.userRepository.find();
  }

  async findOne(id: string): Promise<Vouchers> {
    const vouchers = await this.userRepository.findOne({ where: { Id: id } });
    if (!vouchers) {
      throw new NotFoundException(`Workspace with id ${id} not found`);
    }
    return vouchers;
  }
}