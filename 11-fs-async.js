const { readFileSync, writeFileSync, readFile, writeFile } = require('fs')

console.log('start');


readFile('./content/subfolder/test.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err)
    }
    const first = result;
    readFile('./content/second.txt', 'utf8', (err, result) => {
        if (err) {
            console.log(err)
        }
        const second = result;
        writeFile('./content/result-async.txt', `Here is the result: ${first}, ${second}`, (err, result) => {
            if (err) {
                console.log(err)
            }
            console.log('done with this task');
        })
    })

})

console.log('start a new file');