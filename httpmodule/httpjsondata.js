const http = require('http');
const fs = require('fs');
const path = require('path');

const homePage = fs.readFileSync(path.join(__dirname, '..', 'index.html'), 'utf8');
const aboutUsPage = fs.readFileSync(path.join(__dirname, '..', 'aboutus.html'), 'utf8');
const errorPage = fs.readFileSync(path.join(__dirname, '..', 'error.html'), 'utf8');
const usersPage = fs.readFileSync(path.join(__dirname, '..', 'users.html'), 'utf8');

// Read users data from JSON file
const jsonUsersData = JSON.parse(fs.readFileSync(path.join(__dirname, 'users.json'), 'utf8'));

// Create user cards HTML
const generateUserCards = (users) => {
    return users.map(user => `
        <div class="card">
            <h3>${user.name}</h3>
            <p>Email: ${user.email}</p>
        </div>
    `).join('');
};


//Create Server
const server = http.createServer((req, res) => {
    if (req.url === '/' || req.url === '/index') {
        // res.write(homePage);
        res.writeHead(200, {
            'Content-Type': 'text/html',
            'mycustom-header': 'geethacustomheader',
        }); //to define the status code on request header
        res.end(homePage.replace('{{%CONTENT%}}', 'Home')); // Ending the response for the root route
    } else if (req.url === '/aboutus') {
        // res.write(aboutUsPage);
        res.writeHead(200);
        res.end(aboutUsPage.replace('{{%CONTENT%}}', 'AboutUs')); // Ending the response for the about route
    } else if (req.url === '/users') {
        res.writeHead(200, {
            'Content-Type': 'text/html'
        });
        const userCards = generateUserCards(jsonUsersData);
        const usersFinal = usersPage.replace('{{%CONTENT%}}', 'User Dashboard').replace('{{%USER_CARDS%}}', userCards);
        res.end(usersFinal); // Ending the response for the about route
    }
    else {
        res.writeHead(404);
        res.end(errorPage.replace('{{%CONTENT%}}', 'Error'));
    }
});

// Server listens on port 5000
server.listen(5000, '127.0.0.1', () => {
    console.log('Server is listening on port 5000... UP and Running');
});

module.exports = server;