// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class UsersController {

    dashboard({inertia}){

       
            return inertia.render('Users/Dashboard')
     
    }
}
