const express = require('express');
const router = express.Router();

const user = require('../controllers/client.controller');

router.get('/', user.getClients);
router.post('/', user.createClients);
router.get('/:id', user.getClient);
router.put('/:id', user.editClient);
router.delete('/:id', user.deleteClient);

module.exports = router;