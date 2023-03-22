import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseRepository } from '.';
import { IFirst, First_Entity } from '../models/firstDB/first';

@Injectable()
export class FirstRepository extends BaseRepository<IFirst> {
  constructor(
    @InjectRepository(First_Entity)
    private readonly repository: Repository<IFirst>,
  ) {
    super(repository);
  }
}
