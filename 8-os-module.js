const os = require('os')

//info about end-user
const user = os.userInfo()



//method return by the system uptime

console.log(`The system uptime is ${os.uptime()} second`)

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMen: os.totalmem(),
    freeMemory: os.freemem(),

}

console.log(currentOS)