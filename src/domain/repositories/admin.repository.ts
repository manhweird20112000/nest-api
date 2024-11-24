import { Admin } from '@/domain/entities/admin.repository';

export abstract class IAdminRepository {
  abstract findByEmail(email: string): Promise<Admin | null>;
}
