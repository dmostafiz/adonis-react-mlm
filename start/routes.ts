import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Route from '@ioc:Adonis/Core/Route'
import User from 'App/Models/User'
import Click from 'App/Models/Click'

// import Inertia from '@ioc:EidelLev/Inertia'



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
      click.user_id = parent.id.toString()
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
  Route.get('/user/dashboard', async ({ inertia, auth }: HttpContextContract) => {
    console.log('Auth User: ', auth.user?.first_name)
    return inertia.render('Users/Dashboard')
  })

  Route.get('/user/my_statistics', async ({ inertia }: HttpContextContract) => {
    return inertia.render('Users/MyStatistics')
  })

  Route.get('/user/my_geneology', async ({ inertia }: HttpContextContract) => {
    return inertia.render('Users/MyGeneology')
  })

  Route.get('/user/my_network', async ({ inertia }: HttpContextContract) => {
    return inertia.render('Users/MyNetwork')
  })

}).middleware(['auth', 'isUser'])

Route.group(() => {
  Route.get('/admin/dashboard', async ({ inertia }: HttpContextContract) => {
    return inertia.render('Admin/Dashboard')
  })

  Route.get('/admin/my_statistics', async ({ inertia }: HttpContextContract) => {
    return inertia.render('Admin/MyStatistics')
  })

  Route.get('/admin/my_geneology', async ({ inertia }: HttpContextContract) => {
    return inertia.render('Admin/MyGeneology')
  })

  Route.get('/admin/my_network', async ({ inertia }: HttpContextContract) => {
    return inertia.render('Admin/MyNetwork')
  })

  Route.get('/admin/users', async ({ inertia }: HttpContextContract) => {
    return inertia.render('Admin/Users')
  })

}).middleware(['auth', 'isAdmin'])