const port = 3003;
const bodyParser = require('body-parser');
const express = require('express');
const server = express();
const allowCors = require('./cors');

//  sempre que chegar uma requisão que use o padrão URL enconde
//  quem fará a conversão será o bodyparser.
//  extended = true => aumenta o range de padrões suportados
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use(allowCors);
server.listen(port, function () {
    console.log("************************");
    console.log(`RUNNNING ON PORT ${port}.`);
    console.log("************************");
});

module.exports = server;