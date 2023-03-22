import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { CustomTypeOrmModule } from '../../modules/common.module';
import { FirstRepository } from '../../repositories/first.repository';
import { SecondRepository } from '../../repositories/second.repository';
import { SampleResolver } from './resolvers/sample.resolver';
import * as path from 'path';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

@Module({
  imports: [
    CustomTypeOrmModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: `./${path.basename(__dirname)}-schema.gql`,
      path: `/${path.basename(__dirname)}/graphql`,
    }),
  ],
  providers: [SampleResolver, FirstRepository, SecondRepository],
})
export class SampleModule {
  constructor() {
    console.log(`*** GraphQL Document is Ready at http://localhost:${5000}/${path.basename(__dirname)}/graphql`);
  }
}
