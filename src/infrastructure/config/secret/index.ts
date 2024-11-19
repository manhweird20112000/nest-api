import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { IAdapterSecret } from './adapter';
import { SecretService } from './service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: process.env.NODE_ENV === 'production' ? '.env.prod' : '.env',
    }),
  ],
  providers: [
    {
      provide: IAdapterSecret,
      useClass: SecretService,
    },
  ],
  exports: [IAdapterSecret],
})
export class SecretModule {}
