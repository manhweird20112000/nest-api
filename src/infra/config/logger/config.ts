import { WinstonModuleOptions, utilities } from 'nest-winston';
import * as winston from 'winston';
import 'winston-daily-rotate-file';

export const winstonConfig: WinstonModuleOptions = {
  transports: [
    new winston.transports.DailyRotateFile({
      filename: `logs/app-log-%DATE%.log`,
      dirname: './logs/',
      format: winston.format.combine(winston.format.timestamp()),
      datePattern: 'YYYY-MM-DD',
      zippedArchive: false,
      maxFiles: '30d',
      utc: true,
    }),
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.timestamp({
          format: 'YYYY-MM-DD HH:mm:ss',
        }),
        winston.format.ms(),
        winston.format.colorize(),
        winston.format.splat(),
        winston.format.errors({ stack: true }),
        winston.format.cli(),
        utilities.format.nestLike('app', {
          colors: true,
          prettyPrint: true,
        }),
      ),
    }),
  ],
};
