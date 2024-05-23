const http = require('http')
const fs = require('fs');

const server = http.createServer();

//largeFile.txt is way large
//Doing this way the systems memory is occupied so we go for streams 
server.on('request', (req, resp) => {
    fs.readFile('./fsstreammodule/largeFile.txt', (err, data) => {
        if (err) {
            resp.end('Something went wrong', err);
        }
        resp.end(data);
    }
    )
});
server.listen(5000, () => {
    console.log('Server is listening on port 5000...');
});
module.exports = server;