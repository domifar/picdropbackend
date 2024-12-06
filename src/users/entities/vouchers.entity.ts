// src/users/entity/users.entity.ts
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity() // Declares the class as an entity
export class Vouchers {
  @PrimaryGeneratedColumn() // Auto-incremented primary key
  Id: number;

  @Column() // Specifies a regular column
  VoucherCode: string;

  @Column()
  ValidatedOn: Date;

  @Column()
  WorkspaceId: string;

  @Column()
  WinningChallengeId: string;

  @Column()
  CreatedById: string;

  @Column()
  CreatedOn: Date;

  @Column()
  LastModifiedById: string;

  @Column()
  SubmissionId: string;

  @Column()
  VoucherPrize: string;

  @Column()
  VoucherPrizeEn: string;
}