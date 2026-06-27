import { Field, Int, ObjectType } from '@nestjs/graphql';
import { ExperimentStepsEntity } from './experiment-steps.entity';

@ObjectType()
export class ExperimentStepsPaginatedEntity {
  @Field(() => [ExperimentStepsEntity])
  collection: ExperimentStepsEntity[];

  @Field(() => Int)
  total: number;
}
