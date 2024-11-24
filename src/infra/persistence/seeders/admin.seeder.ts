import { Seeder, SeederFactoryManager } from 'typeorm-extension';
import { DataSource } from 'typeorm';
import { Admin } from '@/infra/persistence/entities/admin.entity';

export class AdminSeeder implements Seeder {
  async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager,
  ): Promise<any> {
    const adminFactory = factoryManager.get(Admin);

    await adminFactory.saveMany(2);
  }
}
