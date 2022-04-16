import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class UsersSchema extends BaseSchema {
  protected tableName = 'users'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()

      table.integer('parent_id')
      .nullable()
      .unsigned()
      .references('users.id')

      table.integer('package_id')
      .nullable()
      .unsigned()
      .references('packages.id')

      table.string('first_name', 255).nullable()
      table.string('last_name', 255).nullable()
      table.string('email', 255).notNullable()
      table.string('ref_id', 255).nullable()
      table.boolean('isadmin').defaultTo(false)
      table.string('password', 180).notNullable()
      table.string('remember_me_token').nullable()

      /**
       * Uses timestampz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true }).notNullable()
      table.timestamp('updated_at', { useTz: true }).notNullable()
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
