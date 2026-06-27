import { Injectable } from '@nestjs/common';
import { ExperimentStepFindFirstArgs } from '../prisma/generated/models';
import { PaginationService } from '../common/pagination.service';
import { ExperimentStepsEntity } from './entities/experiment-steps.entity';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ExperimentStepsService extends PaginationService {
  constructor(protected prismaService: PrismaService) {
    super(prismaService);
  }

  findExperimentSteps(
    experiment_id: number,
    findArgs: ExperimentStepFindFirstArgs,
  ) {
    return this.findAllPaginated<
      ExperimentStepFindFirstArgs,
      ExperimentStepsEntity
    >('experimentStep', {
      where: {
        experiment_id,
      },
      ...findArgs,
    });
  }
  findExperimentStepSchema(step_id: number) {
    return this.prismaService.modelSchema.findFirst({
      where: {
        experiment_step_id: step_id,
      },
      include: {
        modelLayers: true,
      },
    });
  }
}
