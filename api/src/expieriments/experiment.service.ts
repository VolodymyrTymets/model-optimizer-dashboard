import { Injectable } from '@nestjs/common';
import { ExperimentFindFirstArgs } from '../prisma/generated/models';
import { PaginationService } from '../common/pagination.service';
import { ExperimentEntity } from './entities/experiment.entity';
import { PrismaService } from '../prisma/prisma.service';
import { type GraphQLResolveInfo } from 'graphql/type';

@Injectable()
export class ExperimentService extends PaginationService {
  constructor(protected prismaService: PrismaService) {
    super(prismaService);
  }

  findExperiments(
    findArgs: ExperimentFindFirstArgs,
    info?: GraphQLResolveInfo,
  ) {
    return this.findAllPaginated<ExperimentFindFirstArgs, ExperimentEntity>(
      'experiment',
      {
        ...findArgs,
      },
      info,
    );
  }

  findExperiment(experimentId: number) {
    return this.prismaService.experiment.findFirst({
      where: {
        id: experimentId,
      },
    });
  }

  async findBestExperiment() {
    const bestStep = await this.prismaService.experimentStep.findFirst({
      orderBy: {
        accuracy_delta: 'desc',
      },
      select: {
        experiment_id: true,
      },
    });
    return this.prismaService.experiment.findFirst({
      where: {
        id: bestStep?.experiment_id,
      },
    });
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

  findExperimentBestStep(experimentId: number) {
    return this.prismaService.experimentStep.findFirst({
      where: {
        experiment_id: experimentId,
      },
      orderBy: {
        accuracy_delta: 'desc',
      },
    });
  }
}
