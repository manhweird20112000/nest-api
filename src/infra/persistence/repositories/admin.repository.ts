import { IAdminRepository } from '@/domain/repositories/admin.repository';
import { Admin } from '@/domain/entities/admin.repository';
import { Repository } from 'typeorm';
import { Admin as AdminEntity } from '@/infra/persistence/entities/admin.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AdminRepository implements IAdminRepository {
  constructor(
    @InjectRepository(AdminEntity)
    private readonly repo: Repository<AdminEntity>,
  ) {}

  findByEmail(email: string): Promise<Admin | null> {
    return Promise.resolve(undefined);
  }
}
