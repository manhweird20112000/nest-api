import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class Migration1732117725026 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'admin', // Table name
      new TableColumn({
        name: 'role',
        type: 'varchar', // Adjust the type as needed (e.g., varchar, enum, etc.)
        isNullable: true, // Set to true if you want this column to be optional
        default: "'user'", // Default value (optional)
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('admin', 'role');
  }
}
