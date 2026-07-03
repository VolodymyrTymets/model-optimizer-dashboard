import { Field, Int, ObjectType } from '@nestjs/graphql';
import { ExperimentStepEntity } from './experiment-steps.entity';

@ObjectType()
export class ExperimentStepsPaginatedEntity {
  @Field(() => [ExperimentStepEntity])
  collection: ExperimentStepEntity[];

  @Field(() => Int)
  total: number;
}
