import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

abstract class PasswordHasher {
  abstract hash(password: string): Promise<string>;
  abstract compare(plainText: string, hashText: string): Promise<boolean>;
}

@Injectable()
export class BcryptService implements PasswordHasher {
  private salt = 10;

  hash(password: string): Promise<string> {
    return bcrypt.hash(password, this.salt);
  }
  compare(plainText: string, hashText: string): Promise<boolean> {
    return bcrypt.compare(plainText, hashText);
  }
}
