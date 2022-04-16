import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Packages extends BaseSchema {
  protected tableName = 'packages'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.string('package').defaultTo('Starter Package').nullable()

      table.float('level_one').defaultTo(3.0).nullable()
      table.float('level_two').defaultTo(1.0).nullable()
      table.float('level_three').defaultTo(0.5).nullable()
      table.float('level_four').defaultTo(0.2).nullable()
      table.float('level_five').defaultTo(0.1).nullable()
      table.float('level_six').defaultTo(0.1).nullable()
      table.float('level_seven').defaultTo(0.1).nullable()

      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
