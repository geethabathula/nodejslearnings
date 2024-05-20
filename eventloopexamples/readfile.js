const fs = require('fs');
const path = require('path');

const readFile = (filePath, callback) => {
    const fullPath = path.join(__dirname, 'content', filePath);
    fs.readFile(fullPath, 'utf8', (err, data) => {
        if (err) {
            callback(err, null);
        } else {
            callback(null, data);
        }
    });
};

module.exports = readFile;
