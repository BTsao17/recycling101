const express = require('express')
const router = express.Router()

const ProductController = require('../controllers/product')
const RecyclingPlaceController = require('../controllers/recyclingPlace')

router.get('/:category', (request, response) => {
    const {
        category
    } = request.params
    ProductController
        .getProduct(category)
        .then(data => response.json(data))
        .catch(err => console.log(err))

})

router.post('/', (request, response) => {
    const {
        city,
        category,
        item
    } = request.body
    RecyclingPlaceController
        .findRecyclingPlace(city, category, item)
        .then(data => response.json(data))
        .catch(err => console.log(err))
})

module.exports = router