import Route from '@ioc:Adonis/Core/Route'


Route.group(() => {
    Route.get('/invitation_clicks', 'ChartDataController.getInvitationClicks')
    Route.get('/invitation_registers', 'ChartDataController.getInvitationRegistrations')

    Route.get('/all_invitation_clicks', 'ChartDataController.getAllInvitationClicks')
    Route.get('/all_invitation_registers', 'ChartDataController.getAllInvitationRegistrations')

}).namespace('App/Controllers/Http/Api').prefix('api').middleware('auth')







