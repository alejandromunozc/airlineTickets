const ticketController = {}

ticketController.getTickets = (req, res) => {
    res.json({ hola: "Get tickets" });
}

ticketController.getTicket = (req, res) => {
    res.json({ hola: "Get ticket" });
}

ticketController.createTicket = (req, res) => {

}

ticketController.updateTicket = (req, res) => {

}

ticketController.deleteTicket = (req, res) => {

}


module.exports = ticketController;