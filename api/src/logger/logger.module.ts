import { Module } from '@nestjs/common';
import { LoggerService } from './logger.service';
import { LOGGER_FACTORY } from './logger.const';

@Module({
  // imports: [],
  providers: [
    {
      provide: LOGGER_FACTORY,
      useFactory: () => {
        return {
          create: (name: string) => {
            return new LoggerService(name);
          },
        };
      },
    },
  ],
  exports: [LOGGER_FACTORY],
})
export class LoggerModule {}
