//With Promises 
const fs = require('fs').promises;
const path = require('path');

async function readAndWriteFiles() {
    try {
        // Move one directory up from __dirname
        const baseDir = path.join(__dirname, '..', 'content');
        const firstFilePath = path.join(baseDir, 'first.txt');
        const secondFilePath = path.join(baseDir, 'second.txt');
        const resultFilePath = path.join(baseDir, 'result-async-promises.txt');

        // Read files
        const first = await fs.readFile(firstFilePath, 'utf8');
        const second = await fs.readFile(secondFilePath, 'utf8');

        // Write result to a new file
        await fs.writeFile(resultFilePath, `Here is the result: ${first}, ${second}`);

        console.log('Done with this task');
    } catch (err) {
        console.error('Error:', err);
    }
}

module.exports = readAndWriteFiles;



/**
//Without Promises 
const { readFile, writeFile } = require('fs')
console.log('start')
readFile('../content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err)
        return
    }
    const first = result
    readFile('../content/second.txt', 'utf8', (err, result) => {
        if (err) {
            console.log(err)
            return
        }
        const second = result
        writeFile(
            '../content/result-async.txt',
            `Here is the result : ${first}, ${second}`,
            (err, result) => {
                if (err) {
                    console.log(err)
                    return
                }
                console.log('done with this task')
            }
        )
    })
})
 */
