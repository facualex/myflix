const fs   = require("fs");
const path = require("path");

require('dotenv').config()

const moviesPath = process.env.MOVIES_PATH || './movies'
const files  = [];

function readDirectory(directory) {
    fs.readdirSync(directory).forEach(file => {
        const absolute = path.join(directory, file);
        if (fs.statSync(absolute).isDirectory()) return ThroughDirectory(absolute);
        else return files.push(absolute);
    });
}

readDirectory(moviesPath);
