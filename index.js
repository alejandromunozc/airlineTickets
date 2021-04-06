const express = require('express');
const app = express();
require('./lib/dbConnect');

const { config } = require('./config/index');
const flights = require('./routes/flights.routes');
const tickets = require('./routes/tickets.routes');

app.use(express.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
});

app.use(flights);
app.use(tickets);

app.listen(config.port, () => {
    console.log(`Server on port ${config.port}`);
});