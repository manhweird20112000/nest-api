import { ConfigService } from '@nestjs/config';
import { IAdapterSecret } from '@/infrastructure/config/secret/adapter';

export class SecretService extends ConfigService implements IAdapterSecret {
  constructor() {
    super();
  }

  APP_NAME = this.get('APP_NAME');
  APP_PORT = this.get('APP_PORT');

  MYSQL_URI = `mysql://${this.get('DB_USER')}:${this.get(
    'DB_PASSWORD',
  )}@${this.get('DB_HOST')}:${this.get('DB_PORT')}/${this.get('DB_NAME')}`;
}
