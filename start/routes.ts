import Route from '@ioc:Adonis/Core/Route'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'
import Click from 'App/Models/Click'

// import Inertia from '@ioc:EidelLev/Inertia'
require( './api')


  


Route.get('/', async ({ response }: HttpContextContract) => {
  // inertia.location('/auth/login')
  response.redirect().toPath('/auth/login')
})


Route.get('/invite', async ({ request, session, response, auth }: HttpContextContract) => {
  console.log('Session Invite link: ', request.qs().ref)

  if (request.qs().ref) {

    const parent = await User.findBy('ref_id', request.qs().ref)

    console.log('Parent user: ', parent)

    if (parent) {
      const click = new Click()
      click.user_id = parent.id
      await click.save()

      session.put('ref_id', request.qs().ref)
    }
  }

  await auth.logout()
  response.redirect().toPath('/auth/join_now')

})


Route.get('/about_us', async ({ inertia }: HttpContextContract) => {
  return inertia.render('AboutUs')
})


Route.get('/react-test', async ({ inertia }) => {
  return inertia.render('Test/TestReact')
})


Route.group(() => {
  Route.get('/auth/login', async ({ inertia }: HttpContextContract) => {
    return inertia.render('Auth/Login')
  })

  Route.get('/auth/join_now', async ({ inertia }: HttpContextContract) => {
    return inertia.render('Auth/Register')
  })
  // registration logic
  Route.post('register', 'AuthController.register').as('register')
  Route.post('login', 'AuthController.login').as('login')

}).middleware(['isGuest'])

Route.post('logout', 'AuthController.logout').as('logout')

Route.group(() => {
  Route.get('/user/dashboard', 'AffiliatesController.dashboard')
  Route.get('/user/my_statistics', 'AffiliatesController.myStatistics')
  Route.get('/user/my_geneology', 'AffiliatesController.myGeneology')
  Route.get('/user/my_network', 'AffiliatesController.myNetwork')

}).namespace('App/Controllers/Http/User').middleware(['auth', 'isUser'])

Route.group(() => {
  Route.get('/admin/dashboard', 'AdminController.dashboard')
  Route.get('/admin/my_statistics', 'AdminController.my_statistics')
  Route.get('/admin/my_geneology', 'AdminController.my_geneology')
  Route.get('/admin/my_network', 'AdminController.my_network')
  Route.get('/admin/users', 'AdminController.users')

}).namespace('App/Controllers/Http/Admin').middleware(['auth', 'isAdmin'])