import { ObjectType, Field, Int, Float } from '@nestjs/graphql';
import { BasicEntity } from '../../common/entity/basic.entity';

@ObjectType()
export class ModelLayerEntity extends BasicEntity {
  @Field(() => Int, { description: 'experiment_id' })
  experiment_id: number;
  @Field(() => Int, { description: 'experiment_step_id' })
  experiment_step_id: number;
  @Field(() => Int, { description: 'model_schema_id' })
  model_schema_id: number;
  @Field(() => String, { description: 'type' })
  type: string;
  @Field(() => Int, { description: 'units' })
  units: number;
  @Field(() => String, { description: 'activation', nullable: true })
  activation: string;
  @Field(() => String, { description: 'regularizer', nullable: true })
  regularizer: string;
}

@ObjectType()
export class ModelSchemaEntity extends BasicEntity {
  @Field(() => Int, { description: 'experiment_id' })
  experiment_id: number;
  @Field(() => Int, { description: 'experiment_step_id' })
  experiment_step_id: number;
  @Field(() => String, { description: 'optimizer' })
  optimizer: string;
  @Field(() => String, { description: 'loss' })
  loss: string;
  @Field(() => [ModelLayerEntity], { nullable: true, description: 'layers' })
  modelLayers: ModelLayerEntity[];
}

@ObjectType()
export class ExperimentStepsEntity extends BasicEntity {
  @Field(() => Int, { description: 'experiment_id' })
  experiment_id: number;
  @Field(() => Date, { nullable: true, description: 'endAt' })
  endAt: Date;

  @Field(() => Int, { description: 'step' })
  step: number;
  @Field(() => String, { description: 'fingerprint' })
  fingerprint: string;
  @Field(() => Float, { description: 'record_accuracy' })
  record_accuracy: number;
  @Field(() => Float, { description: 'validation_accuracy' })
  validation_accuracy: number;
  @Field(() => Float, { description: 'accuracy_delta' })
  accuracy_delta: number;
  @Field(() => Int, { description: 'epochs' })
  epochs: number;

  @Field(() => ModelSchemaEntity, { description: 'schema' })
  schema: ModelSchemaEntity;
}
