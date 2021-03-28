const { Router } = require('express');
const router = Router();
const {
    getTicket,
    getTickets,
    createTicket,
    updateTicket,
    deleteTicket
} = require('../controllers/tickets.controller');

router.get('/api/tickets/', getTickets);
router.get('/api/tickets/:id', getTicket);
router.post('/api/tickets/', createTicket);
router.put('/api/tickets/:id', updateTicket);
router.delete('/api/tickets/:id', deleteTicket);

module.exports = router;