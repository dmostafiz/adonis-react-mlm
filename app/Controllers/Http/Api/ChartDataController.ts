import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'
import { DateTime } from 'luxon'

export default class ChartDataController {

  async getInvitationClicks({ request, response, auth }: HttpContextContract) {
    // inertia.location('/auth/login')
    // console.log('Api route Called from controller: ', request.qs())

    const option = request.qs().option

    const myId: any = auth.user?.id

    // const today = DateTime.now().toString()


    // let data = {}

    let sql: string = `
    SELECT count(*) as count, 
    DATE_FORMAT(created_at, '%M %d') as date_time 
    FROM clicks 
    WHERE user_id = ? 
    AND created_at > ? 
    GROUP BY date_time
    ORDER BY date_time ASC
    `

    let lastSevenDay: any = DateTime.now().minus({ days: 7 }).toString()


    if (option == '30days') {

      lastSevenDay = DateTime.now().minus({ days: 30 }).toString()

      sql = `
        SELECT count(*) as count, 
        DATE_FORMAT(created_at, '%M %d') as date_time 
        FROM clicks 
        WHERE user_id = ? 
        AND created_at > ? 
        GROUP BY date_time
        ORDER BY date_time ASC
        `
    }
    else if (option == '12months') {
      lastSevenDay = DateTime.now().minus({ months: 12 }).toString()
      sql = `
        SELECT count(*) as count, 
        DATE_FORMAT(created_at, '%M, %Y') as date_time 
        FROM clicks 
        WHERE user_id = ? 
        AND created_at > ? 
        GROUP BY date_time
        ORDER BY date_time ASC

        `
    }


    const clicks = await Database.rawQuery(sql, [myId, lastSevenDay])

    // console.log('Clicks:', clicks)

    const key: any = []
    const value: any = []
    let count: number = 0

    clicks[0].forEach((click: any) => {
      key.push(click.date_time)
      value.push(click.count)
      count += click.count
    })

    const chartData = {
      categories: key,
      chartData: value,
      clickCount: count
    }

    // console.log('ChartData: ', chartData)


    // prms.then(() => {
    return response.json(chartData)
    // })


  }


  async getInvitationRegistrations({ request, response, auth }: HttpContextContract) {
    // inertia.location('/auth/login')
    // console.log('Api route Called from controller: ', request.qs())

    console.log('My Auth Data: ', auth.user)

    const option = request.qs().option

    const myId: any = auth.user?.id 

    // console.log('MyID: ', auth)

    // const today = DateTime.now().toString()


    // let data = {}

    let sql: string = `
    SELECT count(*) as count,
    DATE_FORMAT(created_at, '%M %d') as date_time 
    FROM users 
    WHERE parent_id = ? 
    AND created_at > ? 
    GROUP BY date_time
    ORDER BY date_time ASC
    `

    let lastSevenDay: any = DateTime.now().minus({ days: 7 }).toString()


    if (option == '30days') {

      lastSevenDay = DateTime.now().minus({ days: 30 }).toString()

      sql = `
        SELECT count(*) as count,
        DATE_FORMAT(created_at, '%M %d') as date_time 
        FROM users 
        WHERE parent_id = ? 
        AND created_at > ? 
        GROUP BY date_time
        ORDER BY date_time ASC
        `
    }
    else if (option == '12months') {
      lastSevenDay = DateTime.now().minus({ months: 12 }).toString()
      sql = `
        SELECT count(*) as count,
        DATE_FORMAT(created_at, '%M, %Y') as date_time 
        FROM users 
        WHERE parent_id = ? 
        AND created_at > ? 
        GROUP BY date_time
        ORDER BY date_time ASC

        `
    }


    const users = await Database.rawQuery(sql, [myId, lastSevenDay])

    // console.log('users:', users)

    const key: any = []
    const value: any = []
    let count: number = 0

    users[0].forEach((user: any) => {
      key.push(user.date_time)
      value.push(user.count)
      count += user.count
    })

    const chartData = {
      categories: key,
      chartData: value,
      registerCount: count
    }

    // console.log('ChartData: ', chartData)


    // prms.then(() => {
    return response.json(chartData)
    // })


  }


  async getAllInvitationClicks({ request, response }: HttpContextContract) {
    // inertia.location('/auth/login')
    // console.log('Api route Called from controller: ', request.qs())

    const option = request.qs().option

    // const myId: any = auth.user?.id

    // const today = DateTime.now().toString()


    // let data = {}

    let sql: string = `
    SELECT count(*) as count, 
    DATE_FORMAT(created_at, '%M %d') as date_time 
    FROM clicks 
    WHERE created_at > ? 
    GROUP BY date_time
    ORDER BY date_time ASC
    `

    let lastSevenDay: any = DateTime.now().minus({ days: 7 }).toString()


    if (option == '30days') {

      lastSevenDay = DateTime.now().minus({ days: 30 }).toString()

      sql = `
        SELECT count(*) as count, 
        DATE_FORMAT(created_at, '%M %d') as date_time 
        FROM clicks 
        WHERE created_at > ? 
        GROUP BY date_time
        ORDER BY date_time ASC
        `
    }
    else if (option == '12months') {
      lastSevenDay = DateTime.now().minus({ months: 12 }).toString()
      sql = `
        SELECT count(*) as count, 
        DATE_FORMAT(created_at, '%M, %Y') as date_time 
        FROM clicks 
        WHERE created_at > ? 
        GROUP BY date_time
        ORDER BY date_time ASC

        `
    }


    const clicks = await Database.rawQuery(sql, [lastSevenDay])

    // console.log('Clicks:', clicks)

    const key: any = []
    const value: any = []
    let count: number = 0

    clicks[0].forEach((click: any) => {
      key.push(click.date_time)
      value.push(click.count)
      count += click.count
    })

    const chartData = {
      categories: key,
      chartData: value,
      clickCount: count
    }

    console.log('ChartData: ', chartData)


    // prms.then(() => {
    return response.json(chartData)
    // })


  }


  async getAllInvitationRegistrations({ request, response }: HttpContextContract) {
    // inertia.location('/auth/login')
    // console.log('Api route Called from controller: ', request.qs())

    // console.log('My Auth Data: ', auth.user)

    const option = request.qs().option

    // const myId: any = auth.user?.id 

    // console.log('MyID: ', auth)

    // const today = DateTime.now().toString()


    // let data = {}

    let sql: string = `
    SELECT count(*) as count,
    DATE_FORMAT(created_at, '%M %d') as date_time 
    FROM users 
    WHERE created_at > ? 
    GROUP BY date_time
    ORDER BY date_time ASC
    `

    let lastSevenDay: any = DateTime.now().minus({ days: 7 }).toString()


    if (option == '30days') {

      lastSevenDay = DateTime.now().minus({ days: 30 }).toString()

      sql = `
        SELECT count(*) as count, 
        DATE_FORMAT(created_at, '%M %d') as date_time 
        FROM users 
        WHERE created_at > ? 
        GROUP BY date_time
        ORDER BY date_time ASC
        `
    }
    else if (option == '12months') {
      lastSevenDay = DateTime.now().minus({ months: 12 }).toString()
      sql = `
        SELECT count(*) as count, 
        DATE_FORMAT(created_at, '%M, %Y') as date_time 
        FROM users 
        WHERE created_at > ? 
        GROUP BY date_time
        ORDER BY date_time DESC

        `
    }


    const users = await Database.rawQuery(sql, [lastSevenDay])

    // console.log('users:', users)

    const key: any = []
    const value: any = []
    let count: number = 0

    users[0].forEach((user: any) => {
      key.push(user.date_time)
      value.push(user.count)
      count += user.count
    })

    const chartData = {
      categories: key,
      chartData: value,
      registerCount: count
    }

    // console.log('ChartData: ', chartData)


    // prms.then(() => {
    return response.json(chartData)
    // })


  }
}
