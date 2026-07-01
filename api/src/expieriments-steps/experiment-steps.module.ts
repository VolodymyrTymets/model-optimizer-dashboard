import { Module } from '@nestjs/common';
import { ExperimentStepsService } from './experiment-steps.service';
import { ExperimentStepsResolver } from './experiment-steps.resolver';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [ExperimentStepsResolver, ExperimentStepsService],
  exports: [ExperimentStepsService],
})
export class ExperimentStepsModule {}
