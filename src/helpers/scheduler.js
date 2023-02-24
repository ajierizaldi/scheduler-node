const schedule = require('node-schedule');
const dbConfig = require('../db/dbConfig');

const scheduler = schedule.scheduleJob('*/5 * * * *', async () => {
    // 
    const timeNow = new Date().toISOString().slice(0, 19).replace('T', ' ');

    // save the current time to the database table latihan_scheduler
    const connection = await dbConfig.getConnection();
    await connection.query(`INSERT INTO latihan_scheduler (time) VALUES ('${timeNow}')`);
    await connection.release();

    console.log(`Time now: ${timeNow}`);
});

module.exports = scheduler