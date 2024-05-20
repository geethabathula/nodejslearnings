const http = require('http');

// Create Server

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('Welcome to our homepage');
        res.end(); // Ending the response for the root route
    } else if (req.url === '/about') {
        res.write('About US');
        res.end(); // Ending the response for the about route
    } else {
        res.end(`
            <h1>Oops!</h1>
            <p>We can't seem to find the page you are looking for</p>
            <a href="/">back home</a>
        `);
    }
});

// Server listens on port 5000
server.listen(5000, () => {
    console.log('Server is listening on port 5000...');
});
