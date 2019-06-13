const express = require('express')
const router = express.Router()

const CityController = require('../controllers/city')

router.get('/', (request, response) => {
    CityController
        .getCityList()
        .then(data => response.json(data))
        .catch(err => console.log(err))
})

module.exports = router