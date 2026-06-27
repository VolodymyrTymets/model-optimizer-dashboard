import { Field, Int, ObjectType } from '@nestjs/graphql';
import { ExperimentEntity } from './experiment.entity';

@ObjectType()
export class ExperimentPaginatedEntity {
  @Field(() => [ExperimentEntity])
  collection: ExperimentEntity[];

  @Field(() => Int)
  total: number;
}
