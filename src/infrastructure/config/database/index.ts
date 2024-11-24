import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseService } from '@/infrastructure/config/database/service';
import { IAdapterSecret } from '@/infrastructure/config/secret/adapter';
import { DataSource, DataSourceOptions } from 'typeorm';
import { addTransactionalDataSource } from 'typeorm-transactional';
import { SecretModule } from '@/infrastructure/config/secret';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: ({ MYSQL_URI }: IAdapterSecret) => {
        const connection = new DatabaseService().getConnection({
          url: MYSQL_URI,
        });

        return {
          ...connection,
          timeout: 5000,
          connectionTimeout: 5000,
          autoLoadEntities: true,
          synchronize: true,
          migrationsTableName: 'migration_collection',
          extra: {
            charset: 'utf8mb4_unicode_ci',
          },
          timezone: '+07:00',
        };
      },
      async dataSourceFactory(options: DataSourceOptions) {
        return addTransactionalDataSource(new DataSource(options));
      },
      imports: [SecretModule],
      inject: [IAdapterSecret],
    }),
  ],
})
export class DatabaseModule {}
