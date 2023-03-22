import { Query, Resolver } from '@nestjs/graphql';
import { FirstRepository } from '../../../repositories/first.repository';
import { SecondRepository } from '../../../repositories/second.repository';

@Resolver()
export class SampleResolver {
  constructor(private readonly firstRepository: FirstRepository, private readonly secondRepository: SecondRepository) {}

  @Query(() => String)
  async samples(): Promise<string> {
    const item1 = await this.firstRepository.createOne({ name: 'name name', isSenior: true });
    const item2 = await this.secondRepository.createOne({}); // ! Exception by EntityMetadataNotFoundError: No metadata for "Second_Entity" was found.

    console.log(111, item1);

    return item1.id;
  }
}
