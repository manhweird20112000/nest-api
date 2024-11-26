import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { IAdapterSecret } from '@/infra/config/secret/adapter';
import { SecretModule } from '@/infra/config/secret';

@Module({
  imports: [
    JwtModule.registerAsync({
      useFactory: ({ JWT_SECRET, TOKEN_EXPIRATION }: IAdapterSecret) => {
        return {
          secret: JWT_SECRET,
          signOptions: {
            expiresIn: TOKEN_EXPIRATION,
          },
        };
      },
      inject: [IAdapterSecret],
      imports: [SecretModule],
    }),
  ],
})
export class JWTModule {}
