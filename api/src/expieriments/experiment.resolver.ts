import { Args, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { transformPagination } from '../common/resolver.helpers';
import { PaginationInput } from '../common/input/pagination.input';
import {
  ExperimentEntity,
  ExperimentDetailsEntity,
  ExperimentDataSetDetailsEntity,
} from './entities/experiment.entity';
import { ExperimentService } from './experiment.service';
import { ExperimentPaginatedEntity } from './entities/experiment.paginated.entity';

@Resolver(() => ExperimentEntity)
export class ExperimentResolver {
  constructor(private readonly experimentsService: ExperimentService) {}

  @Query(() => ExperimentPaginatedEntity, {
    description: 'Get Experiments with pagination',
  })
  async experiments(@Args('pagination') pagination: PaginationInput) {
    const { skip, take, orderBy } = transformPagination(pagination);
    return this.experimentsService.findExperiments({
      skip,
      take,
      orderBy,
    });
  }
  @ResolveField(() => ExperimentDetailsEntity)
  async details(@Parent() experiment: ExperimentEntity) {
    return this.experimentsService.findExperimentDetails(experiment.id);
  }
  @ResolveField(() => ExperimentDataSetDetailsEntity)
  async dataSetDetails(@Parent() experiment: ExperimentEntity) {
    return this.experimentsService.findExperimentDataSetDetails(experiment.id);
  }
}
