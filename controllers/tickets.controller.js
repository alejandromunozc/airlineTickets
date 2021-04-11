const ticketController = {}

const ticketModel = require('../lib/models/ticket');
const flightModel = require('../lib/models/flight');
const { updateFlightTickets } = require('./flights.controller');

ticketController.getTickets = async(req, res) => {
    try {
        const flight = await flightModel.findOne({ _id: req.body.flightId });
        const tickets = await ticketModel.find({ _id: { $in: flight.tickets } });
        res.json({ tickets });
    } catch (error) {
        res.json({ message: error });
    }
}

ticketController.getTicket = async(req, res) => {
    const { id } = req.params;
    try {
        const ticket = await ticketModel.findOne({ _id: id });
        res.json({ ticket });
    } catch (error) {
        res.json({ message: error });
    }
}

ticketController.createTicket = async(req, res) => {
    const { passengerName, passengerLastname, seatNumber, flightId } = req.body;
    const newTicket = new ticketModel({ passengerName, passengerLastname, seatNumber, flightId });
    const { id } = newTicket;
    try {
        await newTicket.save();
        await updateFlightTickets(flightId, id)
        res.json({ ticket: newTicket });
    } catch (error) {
        res.json({ message: error });
    }
}

ticketController.updateTicket = async(req, res) => {
    const { id } = req.params;
    const ticket = await ticketModel.findOne({ _id: id });
    const newData = {
        passengerName: req.body.passengerName || ticket.passengerName,
        passengerLastname: req.body.passengerLastname || ticket.passengerLastname,
        seatNumber: req.body.seatNumber || ticket.seatNumber,
        flightId: req.body.flightId || ticket.flightId
    }
    try {
        await ticketModel.findByIdAndUpdate(id, { $set: newData });
        res.json({ ticket: newData });
    } catch (error) {
        res.json({ message: error });
    }
}

ticketController.deleteTicket = async(req, res) => {
    const ticketId = req.params.id;
    try {
        const { flightId } = await ticketModel.findOne({ _id: ticketId });
        const flight = await flightModel.findOne({ _id: flightId });
        const indexTicket = flight.tickets.indexOf(ticketId);
        flight.tickets.splice(indexTicket, 1);
        await flightModel.findByIdAndUpdate(flightId, { $set: flight });
        await ticketModel.findByIdAndDelete(ticketId);
        res.json({ id: ticketId });
    } catch (error) {
        res.json({ message: error });
    }
}

module.exports = ticketController;