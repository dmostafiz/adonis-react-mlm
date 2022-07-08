import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Users extends BaseSchema {
  protected tableName = 'users'

  public async up () {
    this.schema.alterTable(this.tableName, (table) => {
      table.double('wallet').after('total_purchased').defaultTo(0)
    })
  }

  public async down () {
    this.schema.alterTable(this.tableName, (table) => {
    })
  }
}
