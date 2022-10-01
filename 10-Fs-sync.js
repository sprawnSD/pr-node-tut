const { readFileSync, writeFileSync } = require('fs')

console.log('start');


const first = readFileSync('./content/subfolder/test.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

writeFileSync('./content/result-sync.txt', `This is the result: ${first}, ${second}`, { flag: 'a' })

console.log('The task is done');
console.log('start a new one');