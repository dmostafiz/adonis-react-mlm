import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Clicks extends BaseSchema {
  protected tableName = 'clicks'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('user_id').unsigned()
                              .references('users.id')
                              .onDelete('CASCADE')

      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
