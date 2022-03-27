import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class ChartDataController {

    async  getInvitationClicks({request, response }: HttpContextContract) {
        // inertia.location('/auth/login')
        // console.log('Api route Called from controller: ', request.qs())
      
        const option = request.qs().option

   
      
        let data = {}
      
        if(option == '7days'){
          data = {
            categories: ['Saturday', 'Sunday', 'Monday', 'Tweesday', 'wednessday', 'Thurseday', 'Friday'],
            chartData: [13, 37, 44, 55, 49, 60, 5],
            clickCount: 7
          }
        }
        else if(option == '30days'){
          data = {
            categories: ['18 Apr', '19 March', '20 March', '21 March', '22 March', '23 March', '24 March', '25 March'],
            chartData: [30, 40, 45, 50, 49, 60, 40, 5],
            clickCount: 19
          }
        }
        else if(option == '12months'){
          data = {
            categories: ['Jan', 'Feb', 'March', 'Apr', 'May', 'Jun', 'July', 'Aug'],
            chartData: [23, 56, 23, 87, 35, 14, 60, 5],
            clickCount: 384
          }
        }

        // prms.then(() => {
            return await response.json(data)
        // })

      
      }
}
