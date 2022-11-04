const os = require('os')

// if of current user
const user = os.userInfo()
console.log(user)

//uptime in sec
console.log(`system up time is ${os.uptime()} seconds`)

const currentOs = {
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem(),
}

console.log(currentOs)