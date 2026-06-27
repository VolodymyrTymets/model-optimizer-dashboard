import { Injectable } from '@nestjs/common';
import { ExperimentFindFirstArgs } from '../prisma/generated/models';
import { PaginationService } from '../common/pagination.service';
import { ExperimentEntity } from './entities/experiment.entity';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ExperimentService extends PaginationService {
  constructor(protected prismaService: PrismaService) {
    super(prismaService);
  }

  findExperiments(findArgs: ExperimentFindFirstArgs) {
    return this.findAllPaginated<ExperimentFindFirstArgs, ExperimentEntity>(
      'experiment',
      {
        ...findArgs,
      },
    );
  }

  findExperimentDetails(experimentId: number) {
    return this.prismaService.experimentDetails.findFirst({
      where: {
        experiment_id: experimentId,
      },
    });
  }

  findExperimentDataSetDetails(experimentId: number) {
    return this.prismaService.experimentDataSetDetails.findFirst({
      where: {
        experiment_id: experimentId,
      },
    });
  }
}
