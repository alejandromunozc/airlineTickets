const { Router } = require('express');
const router = Router();
const {
    getFlight,
    getFlights,
    createFlight,
    updateFlight,
    deleteFlight
} = require('../controllers/flights.controller');

router.get('/api/flights/', getFlights);
router.get('/api/flights/:id', getFlight);
router.post('/api/flights', createFlight);
router.put('/api/flights/:id', updateFlight);
router.delete('/api/flights/:id', deleteFlight);

module.exports = router;