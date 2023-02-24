require('dotenv').config()
const express = require('express')
const app = express()
const schedule = require('node-schedule');
const port = process.env.PORT || 3000

const model = require('../models')

const useScheduler = schedule.scheduleJob('*/1 * * * *', async () => {
    console.log('running scheduler')

    const data = await model.latihanscheduler.create({
        timenow: new Date()
    })
    console.log(data)

})

useScheduler.invoke()


app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})