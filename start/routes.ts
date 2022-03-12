import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Route from '@ioc:Adonis/Core/Route'
// import Inertia from '@ioc:EidelLev/Inertia'

Route.get('/', async ({ response}: HttpContextContract) => {
  // inertia.location('/auth/login')
  response.redirect().toPath('/auth/login')
})

Route.get('/about_us', async ({ inertia }: HttpContextContract) => {
  return inertia.render('AboutUs')
})

Route.get('/user/dashboard', async ({ inertia }: HttpContextContract) => {
  return inertia.render('Users/Dashboard')
})


Route.get('/auth/login', async ({ inertia } : HttpContextContract) => {
   return inertia.render('Auth/Login')
})

Route.get('/auth/join_now', async ({ inertia } : HttpContextContract) => {
  return inertia.render('Auth/Register')
})