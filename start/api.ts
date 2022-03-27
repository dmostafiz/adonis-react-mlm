import Route from '@ioc:Adonis/Core/Route'


Route.group(() => {
    Route.get('/invitation_clicks', 'ChartDataController.getInvitationClicks')


}).namespace('App/Controllers/Http/Api').prefix('api')







