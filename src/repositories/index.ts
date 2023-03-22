import { ObjectLiteral, Repository } from 'typeorm';

export class BaseRepository<T extends ObjectLiteral> {
  private readonly model: Repository<T>;

  constructor(value: Repository<T>) {
    this.model = value;
  }

  createOne = async (data: Omit<T, 'id'>): Promise<T> => {
    const [item] = this.model.create([data] as any);
    await this.model.insert(item);
    return item as any;
  };

  readOne = (id: T['id']): Promise<T | null> => {
    return this.model.findOne(id);
  };
}
