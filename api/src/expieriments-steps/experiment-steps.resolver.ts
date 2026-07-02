import {
  Args,
  Info,
  Int,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { transformPagination } from '../common/resolver.helpers';
import { PaginationInput } from '../common/input/pagination.input';
import {
  ExperimentStepsEntity,
  ModelSchemaEntity,
} from './entities/experiment-steps.entity';
import { ExperimentStepsService } from './experiment-steps.service';
import { ExperimentStepsPaginatedEntity } from './entities/experiment-steps.paginated.entity';
import { type GraphQLResolveInfo } from 'graphql/type';

@Resolver(() => ExperimentStepsEntity)
export class ExperimentStepsResolver {
  constructor(
    private readonly experimentsStepService: ExperimentStepsService,
  ) {}

  @Query(() => ExperimentStepsPaginatedEntity, {
    description: 'Get Experiments Steps with pagination',
  })
  async experimentSteps(
    @Args('pagination') pagination: PaginationInput,
    @Args({ name: 'experiment_id', type: () => Int }) experiment_id: number,
    @Info() info?: GraphQLResolveInfo,
  ) {
    const { skip, take, orderBy } = transformPagination(pagination);
    return this.experimentsStepService.findExperimentSteps(
      experiment_id,
      {
        skip,
        take,
        orderBy,
      },
      info,
    );
  }
  @ResolveField(() => ModelSchemaEntity)
  async modelSchema(@Parent() step: ExperimentStepsEntity) {
    return this.experimentsStepService.findExperimentStepSchema(step.id);
  }
}
