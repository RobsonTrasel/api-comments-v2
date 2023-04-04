import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createCommentsTable1680566668885 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "comments",
        columns: [
          {
            name: "id",
            type: "integer",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
          },
          {
            name: "name",
            type: "text",
          },
          {
            name: "text",
            type: "text",
          },
          {
            name: "status",
            type: "text",
            default: "'PENDING'",
          },
          {
            name: "photo",
            type: "bytea",
            isNullable: true,
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
          {
            name: "updated_at",
            type: "timestamp",
            default: "now()",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('comments')
  }
}
