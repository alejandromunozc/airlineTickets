const { Schema, model } = require('mongoose');

const ticketsSchema = new Schema({
    passengerName: {
        type: String,
        required: true
    },
    passengerLastname: {
        type: String,
        required: true
    },
    seatNumber: {
        type: Number,
        required: true
    },
    flightId: {
        type: String,
        required: true
    },
}, {
    timestamps: true
});

module.exports = model('Ticket', ticketsSchema);