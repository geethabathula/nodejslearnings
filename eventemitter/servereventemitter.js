const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');
const { type } = require('os');

const homePage = fs.readFileSync(path.join(__dirname, '..', 'index.html'), 'utf8');
const aboutUsPage = fs.readFileSync(path.join(__dirname, '..', 'aboutus.html'), 'utf8');
const errorPage = fs.readFileSync(path.join(__dirname, '..', 'error.html'), 'utf8');
const usersPage = fs.readFileSync(path.join(__dirname, '..', 'users.html'), 'utf8');
const productsPage = fs.readFileSync(path.join(__dirname, '..', 'products.html'), 'utf8');
// Read users data from JSON file
const jsonUsersData = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'httpmodule', 'users.json'), 'utf8'));
const jsonProductsData = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'httpmodule', 'products.json'), 'utf8'));

// Create user cards HTML
const generateUserCards = (users) => {
    return users.map(user => `
        <div class="card">
            <h3>Name: ${user.name}</h3>
            <p>Username: ${user.username}</p>
            <p>Email: ${user.email}</p>
        </div>
    `).join('');
};


// Create product cards HTML
const generateProductCards = (product) => {
    return (product.map(product => `
    <div class="card">
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>Brand: ${product.brand}</p>
        <p>Model: ${product.model}</p>
        <p>Price: $${product.price.toFixed(2)}</p>
        <p>Features:</p>
        <ul>
            ${product.features.map(feature => `<li>${feature}</li>`).join('')}
        </ul>
    </div>
`).join(''));
};

const server = http.createServer();

server.on('request', (req, res) => {
    const { query, pathname: path } = url.parse(req.url, true);

    if (path === '/' || path === '/index') {
        // res.write(homePage);
        res.writeHead(200, {
            'Content-Type': 'text/html',
            'mycustom-header': 'geethacustomheader',
        }); //to define the status code on request header
        res.end(homePage.replace('{{%CONTENT%}}', 'Home')); // Ending the response for the root route
    } else if (path === '/aboutus') {
        // res.write(aboutUsPage);
        res.writeHead(200);
        res.end(aboutUsPage.replace('{{%CONTENT%}}', 'AboutUs')); // Ending the response for the about route
    } else if (path === '/users') {
        res.writeHead(200, {
            'Content-Type': 'text/html'
        });
        const userCards = generateUserCards(jsonUsersData);
        const usersFinal = usersPage.replace('{{%CONTENT%}}', 'User Dashboard').replace('{{%USER_CARDS%}}', userCards);
        res.end(usersFinal);
    } else if (path === '/products') {
        // Check if an ID is provided in the query parameters
        const id = query.id ? Number(query.id) : null;

        // If no ID is provided, display the form
        if (!id) {
            res.writeHead(200, {
                'Content-Type': 'text/html'
            });
            res.end(productsPage.replace('{{%CONTENT%}}', 'Products')
                .replace('{{%PRODUCT_CARDS%}}', '')
                .replace('{{%NOT_FOUND%}}', '')
            );
            return;
        }

        // If ID is provided, proceed with the search
        const valid = jsonProductsData.find(product => product.id === id);
        res.writeHead(200, {
            'Content-Type': 'text/html'
        });
        if (valid) {
            const productCards = generateProductCards([valid]);
            res.end(productsPage.replace('{{%CONTENT%}}', 'Products')
                .replace('{{%PRODUCT_CARDS%}}', productCards)
                .replace('{{%NOT_FOUND%}}', '')
            );
        } else {
            res.end(productsPage.replace('{{%CONTENT%}}', 'Products')
                .replace('{{%PRODUCT_CARDS%}}', '')
                .replace('{{%NOT_FOUND%}}', '<div class="not-found">ID not found. Please check.</div>')
            );
        }
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