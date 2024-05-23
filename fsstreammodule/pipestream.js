const http = require('http')
const fs = require('fs');

const server = http.createServer();

//the resp is itself a writable stream
server.on('request', (req, resp) => {
    let readStream = fs.createReadStream('./fsstreammodule/largeFile.txt');
    readStream.pipe(resp);
    readStream.on('error', (e) => {
        resp.end('Error Occured ');
    })
});

server.listen(5000, () => {
    console.log('Server is listening on port 5000...');
});
module.exports = server;