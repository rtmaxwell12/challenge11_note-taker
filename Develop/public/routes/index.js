const express = require('express');

const notesRouter = require('./notes.js');

const router = express.Router();

router.use('/notes', notesRouter);

module.exports = router;