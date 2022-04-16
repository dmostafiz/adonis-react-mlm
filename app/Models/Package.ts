import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Package extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public package: any

  @column()
  public level_one: any

  @column()
  public level_two: any

  @column()
  public level_three: any

  @column()
  public level_four: any

  @column()
  public level_five: any

  @column()
  public level_six: any

  @column()
  public level_seven: any


  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
