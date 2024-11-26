import { setSeederFactory } from 'typeorm-extension';
import { Admin } from '../entities/admin.entity';
import { Faker } from '@faker-js/faker';

export const AdminFactory = setSeederFactory(
  Admin,
  // @ts-ignore
  (faker: Faker) => {
    const admin = new Admin();
    admin.email = faker.internet.email();
    admin.password = '123456xX@';
    admin.role = 1;

    return admin;
  },
);
