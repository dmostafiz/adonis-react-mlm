import { AuthenticationException } from '@adonisjs/auth/build/standalone'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class IsGuest {
  public async handle({ auth }: HttpContextContract, next: () => Promise<void>) {
    // code for middleware goes here. ABOVE THE NEXT CALL
    console.log('Auth check: ', await auth.check())
    
    const check = auth.isAuthenticated

    if(check){
      // return response.redirect().toPath(`/${auth.user?.isadmin ? 'admin' : 'user'}/dashboard`)
      throw new AuthenticationException(
        'Unauthorized access',
        'E_UNAUTHORIZED_ACCESS',
        'web',
        '/user/dashboard',
      )
    }

    await next()

  }
}
