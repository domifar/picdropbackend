/* eslint-disable prettier/prettier */
//src/app.module.ts
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { VouchersModule } from './vouchers/vouchers.module';
import { WorkspacesModule } from './workspaces/workspaces.module'
import { SubmissionItemsModule } from './SubmissionItems/SubmissionItems.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    DatabaseModule,
    VouchersModule,
    WorkspacesModule,
    SubmissionItemsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {} 