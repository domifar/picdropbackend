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

  //alle workspaces aus der Datenbank zurückgeben
  async findAll(): Promise<Workspaces[]> {
    return await this.userRepository.find();
  }

  async findOne(id: string): Promise<Workspaces> {
    const workspaces = await this.userRepository.findOne({ where: { Id: id } });
    if (!workspaces) {
      throw new NotFoundException(`Workspace with id ${id} not found`);
    }
    return workspaces;
  }
}