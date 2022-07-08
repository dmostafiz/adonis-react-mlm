import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Purchase from 'App/Models/Purchase'
import Product from 'App/Models/Product';
import User from 'App/Models/User';

export default class CheckoutsController {

    async buy({ request, response, auth, session }: HttpContextContract) {

        const userID = auth.user?.id
        const productId = request.body().productId

        const product: any = await Product.query().where({ id: productId }).first()

        const purchase = new Purchase();
        purchase.user_id = userID || null
        purchase.product_id = productId
        purchase.price = product?.price || 0
        await purchase.save()

        const user: any = await User.query().where({ id: userID }).first()
        user.total_purchased = user.total_purchased + product.price
        await user.save();

        async function shareProfitToParent(parent, level, currentLevel) {

            console.log('Next Parent: ', parent.email)
            
            const nextLevel = currentLevel + 1

            const percentage = currentLevel == 1 ? parent.package.level_one 

            : currentLevel == 2 ?   parent.package.level_two
            : currentLevel == 3 ?   parent.package.level_three
            : currentLevel == 4 ?   parent.package.level_four
            : currentLevel == 5 ?   parent.package.level_five
            : currentLevel == 6 ?   parent.package.level_six
            : currentLevel == 7 && parent.package.level_seven 
        
            parent.wallet = (parent.wallet + (product.price * ( percentage / 100 ) )).toFixed(2)

            await parent.save()

            if (currentLevel <= level) {

                const nextParent = await User.query()
                    .preload('package')
                    .where({ id: parent.parent_id })
                    .first()


                if (nextParent) {

                    await shareProfitToParent(nextParent, level, nextLevel);
                }

            }

        }

        const userParent = await User.query()
            .preload('package')
            .where({ id: user.parent_id })
            .first()

        if (userParent) {
            await shareProfitToParent(userParent, 7, 1);
        }


        session.flash('success', 'Product purchased successfully')
        return response.redirect().back()
    }
}
