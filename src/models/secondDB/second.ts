import { Entity, PrimaryColumn } from 'typeorm';

export class ISecond {
  id: number;
}

@Entity({ name: 'second' })
export class Second_Entity implements ISecond {
  @PrimaryColumn({ type: 'bigint', unsigned: true })
  id: number;
}
