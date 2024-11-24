import { IDatabaseAdapter } from '@/infrastructure/config/database/adapter';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export class DatabaseService implements IDatabaseAdapter {
  getConnection<Connection extends TypeOrmModuleOptions>({
    url,
  }: {
    url: string;
  }): Connection {
    return {
      type: 'mysql',
      url,
    } as Connection;
  }
}
