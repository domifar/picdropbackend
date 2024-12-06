// src/users/users.module.ts
import { Module } from '@nestjs/common';
import { WorkspacesService } from './workspaces.service';
import { WorkspacesController } from './workspaces.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Workspaces } from './entities/workspaces.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Workspaces])], // add this line
  controllers: [WorkspacesController],
  providers: [WorkspacesService],
})
export class WorkspacesModule {}