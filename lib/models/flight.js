const { Schema, model } = require('mongoose');

const flightsSchema = new Schema({
    capacity: {
        type: Number,
        required: true
    },
    occupiedSeats: {
        type: Number,
        required: true
    },
    isFull: {
        type: Boolean
    },
    origin: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    destination: {
        type: String,
        required: true
    },
    tickets: {
        type: [String]
    }
}, {
    timestamps: true
});

module.exports = model('Flight', flightsSchema);