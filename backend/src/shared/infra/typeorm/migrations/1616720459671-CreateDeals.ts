import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateDeals1616720459671 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table(
        {
          name: "deals",
          columns: [
            {
              name: "id",
              type: "varchar",
              isPrimary: true
            },
            {
              name: "title",
              type: "varchar",
            },
            {
              name: "clientName",
              type: "varchar",
            },
            {
              name: "date",
              type: "varchar",
            },
            {
              name: "amount",
              type: "integer",
            },
            {
              name: "created_at",
              type: "timestamp",
              default: "now()"
            }
          ]
        }
      )
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("deals");
  }

}