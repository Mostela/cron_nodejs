const CronJob = require('cron').CronJob
let rodou = 0

const job = new CronJob('*/5 * * * * *',
() => {
    rodou++;
    console.log("Rodou " + rodou +" vezes")
    if(rodou == 10){
        job.stop()
    }

}, () => {
    console.log("Ahh parou :(")
    rodou = 0
    job.start()
    console.log("Começou denovo!!")
}, true, 'America/Sao_Paulo')