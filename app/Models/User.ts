import { DateTime } from 'luxon'
import Hash from '@ioc:Adonis/Core/Hash'
import { column, beforeSave, BaseModel, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'
import Click from './Click'
import Registration from './Registration'

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public parent_id: number

  @column()
  public first_name: string

  @column()
  public last_name: string

  @column()
  public email: string

  @column()
  public ref_id: string

  @column()
  public isadmin: boolean

  @column({ serializeAs: null })
  public password: string

  @column()
  public rememberMeToken?: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasMany(() => Click, {
    foreignKey: 'user_id', // defaults to userId
  })
  public clicks: HasMany<typeof Click>

  @hasMany(() => Registration, {
    foreignKey: 'user_id', // defaults to userId
  })
  public registrations: HasMany<typeof Registration>


  @hasMany(() => User, {
    foreignKey: 'parent_id', // defaults to userId
  })
  public children: HasMany<typeof User>


  @beforeSave()
  public static async hashPassword (user: User) {
    if (user.$dirty.password) {
      user.password = await Hash.make(user.password)
    }
  }
}
