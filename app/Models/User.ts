import { DateTime } from 'luxon'
import Hash from '@ioc:Adonis/Core/Hash'
import { column, beforeSave, BaseModel, hasMany, HasMany, BelongsTo, belongsTo } from '@ioc:Adonis/Lucid/Orm'
import Click from './Click'
import Registration from './Registration'
import Package from './Package'

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public parent_id: number

  @column()
  public package_id: number
  
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

  @column()
  public share_links: string
  
  @column()
  public source: string

  @column()
  public total_purchased: Float32Array
  
  @column()
  public wallet: Float32Array
  
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
    localKey: 'id', 
    foreignKey: 'parent_id', // defaults to userId
  })
  public children: HasMany<typeof User>

  @belongsTo(() => User, {
    localKey: 'id', 
    foreignKey: 'parent_id'
  })
  public parent: BelongsTo<typeof User>


  @belongsTo(() => Package, {
    localKey: 'id', 
    foreignKey: 'package_id'
  })
  public package: BelongsTo<typeof Package>


  @beforeSave()
  public static async hashPassword (user: User) {
    if (user.$dirty.password) {
      user.password = await Hash.make(user.password)
    }
  }
}
