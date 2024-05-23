const http = require('http')
const fs = require('fs');

const server = http.createServer();

//the resp is itself a writable stream
server.on('request', (req, resp) => {
    //emits the 'data' stream whenever the data is read piece by piece
    //emits 'error' whenever an error occurs on reading 
    let readStream = fs.createReadStream('./fsstreammodule/largeFile.txt');
    readStream.on('data', (chunk) => {
        resp.write(chunk);

    });
    readStream.on('end', () => {
        resp.end();
    })
    readStream.on('error', (e) => {
        resp.end('Error Occured ');
    })
});

server.listen(5000, () => {
    console.log('Server is listening on port 5000...');
});
module.exports = server;