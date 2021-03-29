const flightController = {};

const flightModel = require('../lib/models/flight');

flightController.getFlights = async(req, res) => {
    try {
        const flights = await flightModel.find();
        res.json({ flights });
    } catch (error) {
        res.json({ message: error });
    }
}

flightController.getFlight = async(req, res) => {
    const { id } = req.params;
    try {
        const flights = await flightModel.findOne({ _id: id });
        res.json({ flights });
    } catch (error) {
        res.json({ message: error });
    }
}

flightController.createFlight = async(req, res) => {
    const { origin, destination, capacity, date } = req.body;
    const newFlight = new flightModel({ origin, destination, capacity, date, occupiedSeats: 0, isFull: false });
    try {
        await newFlight.save();
        res.json({ flight: newFlight });
    } catch (error) {
        res.json({ message: error });
    }
}

flightController.updateFlight = async(req, res) => {
    const { id } = req.params;
    const flight = await flightModel.findOne({ _id: id });
    const newData = {
        origin: req.body.origin || flight.origin,
        destination: req.body.destination || flight.destination,
        capacity: req.body.capacity || flight.capacity,
        date: req.body.date || flight.date,
        occupiedSeats: req.body.occupiedSeats || flight.occupiedSeats,
        isFull: flight.capacity === req.body.occupiedSeats ? true : false
    }

    if (req.body.tickets) {
        newData.tickets = flight.tickets;
        newData.tickets[newData.tickets.length] = req.body.tickets;
    }

    try {
        await flightModel.findByIdAndUpdate(id, { $set: newData });
        res.json({ flight: newData });
    } catch (error) {
        res.json({ message: error });
    }

}

flightController.deleteFlight = async(req, res) => {
    try {
        await flightModel.findByIdAndDelete(req.params.id);
        res.json({ id: req.params.id });
    } catch (error) {
        res.json({ message: error });
    }

}

module.exports = flightController;