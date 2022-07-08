// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import Product from 'App/Models/Product';
const { RandomPicture } = require('random-picture')

export default class ProductsController {

    async create({ inertia }: HttpContextContract) {

        return inertia.render('Admin/Product/Create')

    }

    async list({ inertia }: HttpContextContract) {

        const products = Product.all()
        return inertia.render('Admin/Product/List', {
            products: products
        })

    }

    async store({ session, request, response }: HttpContextContract) {


        const body = request.body()

        const image = await RandomPicture()

        const product = new Product();
        product.name = body.name
        product.price = body.price
        product.content = body.content
        product.image = image.url
        await product.save()

        session.flash('success', 'Product created successfully.')

        response.redirect('/admin/product/list')

    }

    async delete({ request, response, session }: HttpContextContract) {
        const productId = request.params().productId
        const product = await Product.query().where({ id: productId }).first()
        if (product) {
            await product.delete()

            session.flash('success', 'Product deleted successfully.')

            response.redirect().back()
        }
    }
}
