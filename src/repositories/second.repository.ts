import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseRepository } from '.';
import { Second_Entity, ISecond } from '../models/secondDB/second';

@Injectable()
export class SecondRepository extends BaseRepository<ISecond> {
  constructor(
    @InjectRepository(Second_Entity)
    private readonly repository: Repository<ISecond>,
  ) {
    super(repository);
  }

  customFunction(): Promise<number> {
    console.log('*** customFunction called');

    return this.repository.count();
  }
}
