import { join } from 'path';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ConfigModule } from '@nestjs/config';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { LoggerModule } from './logger/logger.module';
import { ExperimentModule } from './expieriments/experiment.module';
import { ExperimentStepsModule } from './expieriments-steps/experiment-steps.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Makes the module available everywhere without re-importing
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), './schema.gql'),
      graphiql: true,
    }),
    LoggerModule,
    PrismaModule,
    ExperimentModule,
    ExperimentStepsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
