// src/users/users.module.ts
import { Module } from '@nestjs/common';
import { SubmissionItemsService } from './SubmissionItems.service';
import { SubmissionItemsController } from './SubmissionItems.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SubmissionItems } from './entities/SubmissionItems.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SubmissionItems])], // add this line
  controllers: [SubmissionItemsController],
  providers: [SubmissionItemsService],
})
export class SubmissionItemsModule {}