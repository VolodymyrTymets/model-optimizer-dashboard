export interface LoggerServiceInterface {
  log(message: string, args?: any): void;
  error(message: string, error?: Error): void;
  debug(message: string, args?: any): void;
}
