import { ObjectType, Field, Int, Float } from '@nestjs/graphql';
import { BasicEntity } from '../../common/entity/basic.entity';
import { ExperimentStepEntity } from '../../expieriments-steps/entities/experiment-steps.entity';

@ObjectType()
export class ExperimentDetailsEntity extends BasicEntity {
  @Field(() => Int, { description: 'regularizer' })
  experiment_id: number;
  @Field(() => String, { description: 'layers' })
  layers: string;
  @Field(() => String, { description: 'activation' })
  activation: string;
  @Field(() => String, { description: 'optimizer' })
  optimizer: string;
  @Field(() => String, { nullable: true, description: 'regularizer' })
  regularizer: string;
  @Field(() => String, { description: 'loss' })
  loss: string;
  @Field(() => Int, { description: 'epochs' })
  epochs: number;
  @Field(() => Int, { description: 'batch_size' })
  batch_size: number;
}

@ObjectType()
export class ExperimentDataSetDetailsEntity extends BasicEntity {
  @Field(() => Int, { description: 'regularizer' })
  experiment_id: number;
  @Field(() => Float, { description: '  duration' })
  duration: number;
  @Field(() => String, { description: 'labels' })
  labels: string;
  @Field(() => String, { description: 'argumentation_types' })
  argumentation_types: string;
  @Field(() => String, { description: 'af_type' })
  af_type: string;
}

@ObjectType()
export class ExperimentEntity extends BasicEntity {
  @Field(() => Date, { nullable: true, description: 'endAt' })
  endAt: Date;
  @Field(() => ExperimentDetailsEntity, { description: 'details' })
  details: ExperimentDetailsEntity;

  @Field(() => ExperimentDataSetDetailsEntity, {
    description: 'dataSetDetails',
  })
  dataSetDetails: ExperimentDataSetDetailsEntity;

  @Field(() => ExperimentStepEntity, {
    description: 'bestStep',
    nullable: true,
  })
  bestStep: ExperimentStepEntity;
}
