// src/users/users.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Workspaces } from './entities/workspaces.entity';
import { Repository } from 'typeorm';

@Injectable()
export class WorkspacesService {
  constructor(
    @InjectRepository(Workspaces) private userRepository: Repository<Workspaces>,
  ) {}

  async findAll(): Promise<Workspaces[]> {
    return await this.userRepository.find();
  }
}