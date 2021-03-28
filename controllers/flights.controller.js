const flightController = {}

flightController.getFlights = (req, res) => {
    res.json({ hola: "Get Flights" });
}

flightController.getFlight = (req, res) => {
    res.json({ hola: "Get Flight" });
}

flightController.createFlight = (req, res) => {

}

flightController.updateFlight = (req, res) => {

}

flightController.deleteFlight = (req, res) => {

}


module.exports = flightController;