'use strict'

const fs = require("fs");
fs.readFile(process.argv[2], 'utf8', function (err, file) {
    const fileString = file.toString();
    const count = fileString.split("\n");
    console.log(count.length - 1);
});

