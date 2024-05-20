const { readFileSync, writeFileSync, read } = require('fs')
console.log('start')
const first = readFileSync('../content/first.txt', 'utf8')

const second = readFileSync('../content/second.txt', 'utf8')

console.log(first)
console.log(second)

const sampleFile = readFileSync('../content/samplesync.txt', 'utf8')
writeFileSync(
    '../content/result-sync.txt',
    sampleFile,
    { flag: 'a' }
)
console.log('done with this task')
