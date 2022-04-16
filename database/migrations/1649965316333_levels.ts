import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Levels extends BaseSchema {
  protected tableName = 'levels'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.integer('user_id').unsigned()
        .references('users.id')
        .onDelete('CASCADE')

      table.integer('level').unsigned()

      table.integer('child_id').unsigned()
        .references('users.id')
        .onDelete('CASCADE')

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
