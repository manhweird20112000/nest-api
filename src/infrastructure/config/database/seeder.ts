import dataSource from './typeorm';
import { runSeeders } from 'typeorm-extension';
import { AdminSeeder } from '../../persistence/seeders/admin.seeder';
import { AdminFactory } from '../../persistence/factories/admin.factory';

(async () => {
  try {
    await dataSource.initialize();

    await runSeeders(dataSource, {
      seeds: [AdminSeeder],
      factories: [AdminFactory],
    });
    process.exit();
  } catch (error) {
    console.log('ERROR RUN SEEDER: ', error);
    process.exit();
  }
})();
