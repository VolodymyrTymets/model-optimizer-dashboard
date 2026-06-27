import { Module } from '@nestjs/common';
import { ExperimentService } from './experiment.service';
import { ExperimentResolver } from './experiment.resolver';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [ExperimentResolver, ExperimentService],
  exports: [ExperimentService],
})
export class ExperimentModule {}
