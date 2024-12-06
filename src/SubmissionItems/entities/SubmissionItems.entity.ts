/* eslint-disable prettier/prettier */
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity("SubmissionItems")
export class SubmissionItems {
  @PrimaryGeneratedColumn() // Auto-incremented primary key
  Id : number;

  @Column()
  SubmissionId: string;

  @Column()
  FileId : string;

  @Column()
  ThumbnailId : string;

  @Column()
  Width : string;

  @Column()
  Height : string;

  @Column()
  ContentType : string;

  @Column()
  ContentLength : string;

  @Column()
  Rating : string;

  @Column()
  Orientation : string;

  @Column()
  CreatedById : Date;

  @Column()
  CreatedOn : string;

  @Column()
  LastModifiedById : string;

  @Column()
  LastModifiedOn : number;
}