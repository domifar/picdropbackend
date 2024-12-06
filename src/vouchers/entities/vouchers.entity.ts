// src/users/entity/users.entity.ts
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('Vouchers') // Declares the class as an entity
export class Vouchers {
  @PrimaryGeneratedColumn('uuid') // Auto-incremented primary key
  Id: string;

  @Column({type:'varchar', nullable:true})
  VoucherCode: string;

  @Column({nullable:true})
  ValidatedOn: Date;

  @Column({nullable:true})
  WorkspaceId: string;

  @Column({nullable:true})
  WinningChallengeId: string;

  @Column({nullable:true})
  CreatedById: string;

  @Column({nullable:true})
  CreatedOn: Date;

  @Column({nullable:true})
  LastModifiedById: string;

  @Column({nullable:true})
  SubmissionId: string;

  @Column({nullable:true})
  VoucherPrize: string;

  @Column({nullable:true})
  VoucherPrizeEn: string;
}