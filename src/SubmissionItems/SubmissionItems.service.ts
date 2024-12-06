// src/users/users.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SubmissionItems } from './entities/SubmissionItems.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SubmissionItemsService {
  constructor(
    @InjectRepository(SubmissionItems) private userRepository: Repository<SubmissionItems>,
  ) {}

  async findAll(): Promise<SubmissionItems[]> {
    return await this.userRepository.find();
  }
}