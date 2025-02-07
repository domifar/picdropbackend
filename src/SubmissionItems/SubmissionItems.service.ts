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

  //alle SubmissionItems aus der Datenbank zurückgeben
  async findAll(): Promise<SubmissionItems[]> {
    return await this.userRepository.find();
  }

  async findOne(id: string): Promise<SubmissionItems> {
    const submission = await this.userRepository.findOne({ where: { Id: id } });
    if (!submission) {
      throw new NotFoundException(`Workspace with id ${id} not found`);
    }
    return submission;
  }
}