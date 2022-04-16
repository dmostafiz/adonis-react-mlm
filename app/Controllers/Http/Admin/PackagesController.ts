import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Package from 'App/Models/Package'

export default class PackagesController {

    async getPackages({ request, response, inertia }: HttpContextContract) {

        const packages = Package.query()

        return inertia.render('Admin/Packages/Index', {packages})
    }
}
