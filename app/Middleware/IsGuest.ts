import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class IsGuest {
  public async handle({ auth }: HttpContextContract, next: () => Promise<void>) {
    // code for middleware goes here. ABOVE THE NEXT CALL
    auth.isGuest && await next()

  }
}
