const router = require('express').Router();
const notesRoutes = require('./noteRoutes');

router.use('/api', notesRoutes)

module.exports = router