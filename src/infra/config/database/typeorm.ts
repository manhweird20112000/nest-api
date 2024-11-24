import 'reflect-metadata';
import { config } from 'dotenv';
import { DataSource } from 'typeorm';

config({ path: process.env.NODE_ENV === 'production' ? '.env.prod' : '.env' });

const dataSource = new DataSource({
  type: 'mysql',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  migrationsTableName: 'migration_collection',
  extra: {
    charset: 'utf8mb4_unicode_ci',
  },
  timezone: '+07:00',
  synchronize: true,
  debug: true,
  logging: true,
  logger: 'advanced-console',
  migrations: ['dist/infra/persistence/migrations/**/*{.ts,.js}'],
  entities: ['dist/infra/persistence/entities/**/*.entity{.ts,.js}'],
});

export default dataSource;
