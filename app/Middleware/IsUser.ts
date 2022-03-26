import { AuthenticationException } from '@adonisjs/auth/build/standalone'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class IsUser {
  public async handle({auth}: HttpContextContract, next: () => Promise<void>) {
    // code for middleware goes here. ABOVE THE NEXT CALL

    if(auth.user?.isadmin == true){

      throw new AuthenticationException(
        'Unauthorized access',
        'E_UNAUTHORIZED_ACCESS',
        'web',
        '/admin/dashboard',
      )
    }

    await next()
  }
}
