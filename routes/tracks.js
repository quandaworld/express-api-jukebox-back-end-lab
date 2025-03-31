const express = require('express');
const router = express.Router();
const tracksController = require('../controllers/tracksController');

// POST /tracks - Create a new track
router.post('/', tracksController.create);

// GET /tracks - Get all tracks
router.get('/', tracksController.index);

// GET /tracks/:id - Get a single track
router.get('/:id', tracksController.show);

// PUT /tracks/:id - Update a track
router.put('/:id', tracksController.update);

// DELETE /tracks/:id - Delete a track
router.delete('/:id', tracksController.delete);

module.exports = router;