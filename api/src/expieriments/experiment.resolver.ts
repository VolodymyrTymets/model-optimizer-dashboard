import {
  Args,
  Int,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { transformPagination } from '../common/resolver.helpers';
import { PaginationInput } from '../common/input/pagination.input';
import {
  ExperimentEntity,
  ExperimentDetailsEntity,
  ExperimentDataSetDetailsEntity,
} from './entities/experiment.entity';
import { ExperimentService } from './experiment.service';
import { ExperimentPaginatedEntity } from './entities/experiment.paginated.entity';
import { type GraphQLResolveInfo } from 'graphql/type';
import { ExperimentStepsEntity } from '../expieriments-steps/entities/experiment-steps.entity';

@Resolver(() => ExperimentEntity)
export class ExperimentResolver {
  constructor(private readonly experimentsService: ExperimentService) {}

  @Query(() => ExperimentPaginatedEntity, {
    description: 'Get Experiments with pagination',
  })
  async experiments(
    @Args('pagination') pagination: PaginationInput,
    info?: GraphQLResolveInfo,
  ) {
    const { skip, take, orderBy } = transformPagination(pagination);
    return this.experimentsService.findExperiments(
      {
        skip,
        take,
        orderBy,
      },
      info,
    );
  }

  @Query(() => ExperimentEntity, {
    description: 'Get Single Experiment',
  })
  async experiment(
    @Args({ name: 'experiment_id', type: () => Int }) experiment_id: number,
  ) {
    return this.experimentsService.findExperiment(experiment_id);
  }

  @Query(() => ExperimentEntity, {
    description: 'Get Best Experiment',
  })
  async bestExperiment() {
    return this.experimentsService.findBestExperiment();
  }

  @ResolveField(() => ExperimentDetailsEntity)
  async details(@Parent() experiment: ExperimentEntity) {
    return this.experimentsService.findExperimentDetails(experiment.id);
  }
  @ResolveField(() => ExperimentDataSetDetailsEntity)
  async dataSetDetails(@Parent() experiment: ExperimentEntity) {
    return this.experimentsService.findExperimentDataSetDetails(experiment.id);
  }

  @ResolveField(() => ExperimentStepsEntity)
  async bestStep(@Parent() experiment: ExperimentEntity) {
    return this.experimentsService.findExperimentBestStep(experiment.id);
  }
}
