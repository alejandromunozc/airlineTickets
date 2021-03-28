const express = require('express');
const app = express();

const { config } = require('./config/index');
const flights = require('./routes/flights.routes');
const tickets = require('./routes/tickets.routes');

app.use(express.json());

app.use(flights);
app.use(tickets);

app.listen(config.port, () => {
    console.log(`Server on port ${config.port}`);
});