const schedule = require('node-schedule');
const dbConfig = require('../db/dbConfig');

const scheduler = schedule.scheduleJob('*/5 * * * *', async () => {
    // 
    const timeNow = new Date().toISOString().slice(0, 19).replace('T', ' ');

    // create id and timenow to table latihan_scheduler
    const insertScheduler = await dbConfig.getConnection()
    await insertScheduler.query(`INSERT INTO latihan_scheduler (id, time_now) VALUES (DEFAULT, '${timeNow}')`);
    insertScheduler.release();

    console.log(`Scheduler running at ${timeNow}`);

    // get data from table latihan_scheduler
    const getScheduler = await dbConfig.getConnection()
    const [rows, fields] = await getScheduler.query(`SELECT * FROM latihan_scheduler`);
    getScheduler.release();

    console.log(rows);

});

module.exports = scheduler