import { Injectable } from '@nestjs/common';
import { JwtService as JwtServiceCore } from '@nestjs/jwt';

@Injectable()
export class JwtService extends JwtServiceCore {
  constructor() {
    super({
      secret: process.env.JWT_SECRET,
      privateKey: process.env.TOKEN_EXPIRATION,
      signOptions: {
        expiresIn: process.env.TOKEN_EXPIRATION,
      },
    });
  }
}
