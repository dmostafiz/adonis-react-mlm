/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer''
|
*/
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async ({ inertia }: HttpContextContract) => {
  return inertia.render('Home')
})

Route.get('/about_us', async ({ inertia }: HttpContextContract) => {
  return inertia.render('AboutUs')
})

Route.get('/auth/login', async ({ inertia } : HttpContextContract) => {
   return inertia.render('Auth/Login')
})

Route.get('/auth/join_now', async ({ inertia } : HttpContextContract) => {
  return inertia.render('Auth/Register')
})