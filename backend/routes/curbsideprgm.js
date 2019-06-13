const express = require('express')
const router = express.Router()

const CurbsidePrgmController = require('../controllers/curbsidePrgm')

router.get('/:city', (request, response) => {
    const {
        city
    } = request.params
    CurbsidePrgmController
        .getProgram(city)
        .then(data => response.json(data))
        .catch(err => console.log(err))
})

module.exports = router