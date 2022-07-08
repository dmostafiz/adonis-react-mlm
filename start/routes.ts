import Route from '@ioc:Adonis/Core/Route'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'
import Click from 'App/Models/Click'
import Package from 'App/Models/Package'
import Product from 'App/Models/Product'

// import Inertia from '@ioc:EidelLev/Inertia'
require('./api')


Route.get('/', async ({ inertia }: HttpContextContract) => {
  return inertia.render('Home')

})

Route.get('/products', async ({ inertia }: HttpContextContract) => {
  const products = Product.all()
  return inertia.render('Products', {
    products: products
  })
})

Route.get('/blog', async ({ inertia }: HttpContextContract) => {
  return inertia.render('Blog')
})


Route.get('/invite', async ({ request, session, response, auth }: HttpContextContract) => {
  console.log('Session Invite link: ', request.qs().ref)

  if (request.qs().ref) {

    const parent = await User.findBy('ref_id', request.qs().ref)

    console.log('Parent user: ', parent)

    if (parent) {
      const click = new Click()
      click.user_id = parent.id
      if (request.qs().src) {
        click.source = request.qs().src
      }
      await click.save()

      session.put('ref_id', request.qs().ref)
      session.put('source', request.qs().src)

    }
  }

  await auth.logout()
  response.redirect().toPath('/auth/join_now')

})


Route.get('/about_us', async ({ inertia }: HttpContextContract) => {
  return inertia.render('AboutUs')
}).middleware(['auth'])


Route.get('/react-test', async ({ inertia }) => {
  return inertia.render('Test/TestReact')
}).middleware(['auth'])


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
  Route.get('/dashboard', 'AffiliatesController.dashboard')
  Route.get('/my_statistics', 'AffiliatesController.myStatistics')
  Route.get('/my_geneology', 'AffiliatesController.myGeneology')
  Route.get('/my_network', 'AffiliatesController.myNetwork')

  Route.get('/profile', 'ProfilesController.getProfileOrCreate')

  Route.post('update_share_link', 'AffiliatesController.update_share_link').as('share.link')

  Route.post('/buy_product', 'CheckoutsController.buy').as('buy.product')

}).prefix('user').namespace('App/Controllers/Http/User').middleware(['auth', 'isUser'])

Route.group(() => {
  Route.get('/dashboard', 'AdminController.dashboard')
  Route.get('/my_statistics', 'AdminController.my_statistics')
  Route.get('/my_geneology', 'AdminController.my_geneology')
  Route.get('/my_network', 'AdminController.my_network')
  Route.get('/packages', 'PackagesController.getPackages')
  Route.get('/users', 'AdminController.users')

  Route.get('/user/:userId', 'UsersController.getUserProfile')

  Route.post('/user/change-rank', 'UsersController.changeUserRank')

  Route.post('/save_edited_rank', async ({ request, inertia }: HttpContextContract) => {
    const req = request.body().pakage

    console.log('req: ', req)

    const pkg: any = await Package.findBy('id', req.id)
    pkg.level_one = req.level_one
    pkg.level_two = req.level_two
    pkg.level_three = req.level_three
    pkg.level_four = req.level_four
    pkg.level_five = req.level_five
    pkg.level_six = req.level_six
    pkg.level_seven = req.level_seven

    await pkg.save()

    return inertia.redirectBack()
  })

  Route.get('/product/create', 'ProductsController.create')
  Route.get('/product/list', 'ProductsController.list')
  Route.post('/product/store', 'ProductsController.store')
  Route.get('/product/delete/:productId', 'ProductsController.delete')



}).prefix('admin').namespace('App/Controllers/Http/Admin').middleware(['auth', 'isAdmin'])