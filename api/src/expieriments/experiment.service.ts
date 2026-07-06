import { Injectable } from '@nestjs/common';
import { ExperimentFindFirstArgs } from '../prisma/generated/models';
import { PaginationService } from '../common/pagination.service';
import { ExperimentEntity } from './entities/experiment.entity';
import { PrismaService } from '../prisma/prisma.service';
import { type GraphQLResolveInfo } from 'graphql/type';
import { ForbiddenError } from '@nestjs/apollo';

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
      include: {
        modelSchemas: {
          include: {
            modelLayers: true,
          },
        },
        training_history_plot: true,
        recordResults: {
          include: {
            image: true,
          },
        },
      },
    });
  }

  async deleteExperiment(experimentId: number) {
    const experiment = await this.findExperiment(experimentId);
    if (!experiment) {
      throw new ForbiddenError(`Experiment with ID ${experimentId} not found`);
    }
    await this.prismaService.$transaction([
      this.prismaService.experimentDataSetDetails.deleteMany({
        where: {
          experiment_id: experimentId,
        },
      }),
      this.prismaService.experimentDetails.deleteMany({
        where: {
          experiment_id: experimentId,
        },
      }),
      this.prismaService.modelLayer.deleteMany({
        where: {
          experiment_id: experimentId,
        },
      }),
      this.prismaService.modelSchema.deleteMany({
        where: {
          experiment_id: experimentId,
        },
      }),
      this.prismaService.experimentStep.deleteMany({
        where: {
          experiment_id: experimentId,
        },
      }),
      this.prismaService.experiment.delete({
        where: {
          id: experimentId,
        },
      }),
    ]);
    return experiment;
  }
}
