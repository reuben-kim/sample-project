import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export interface IFirst {
  id: string;
  name: string;
  age?: number;
  school?: string;
  isSenior: boolean;
}

@Entity({ name: 'first' })
export class First_Entity implements IFirst {
  @PrimaryGeneratedColumn({ type: 'bigint', unsigned: true })
  id: string;

  @Column('varchar', { nullable: false })
  name: string;

  @Column('int', { nullable: true })
  age?: number;

  @Column('varchar', { nullable: true })
  school?: string;

  @Column('boolean', { nullable: false, default: false })
  isSenior: boolean;
}
