import { Injectable } from '@nestjs/common';
import { LoggerServiceInterface } from './logger.service.interface';

@Injectable()
export class LoggerService implements LoggerServiceInterface {
  private readonly serviceName: string;
  constructor(serviceName: string) {
    this.serviceName = serviceName;
  }
  log(message: string, ...args: any): void {
    console.log(`[${this.serviceName}]: ${message}`, ...args);
  }
  error(message: string, error?: Error): void {
    const _message = `[${this.serviceName}]: ${message}`;
    console.error(_message);
    console.error(error);
  }
  debug(message: string, ...args: any): void {
    if (
      process.env.NODE_ENV === 'local' ||
      process.env.NODE_ENV === 'development'
    ) {
      console.log(`[${this.serviceName}]: ${message}`, ...args);
    }
  }
}
