const router = require('express').Router()


const apiRoutes = require('./api')
const htmlRoute = require('./htmlRoute')

router.use('/api', apiRoutes)
router.use('/', htmlRoute)

module.exports = router