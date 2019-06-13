const express = require('express')
const router = express.Router()

const ProductCategoryController = require('../controllers/productCategory')

router.get('/', (request, response) => {
    ProductCategoryController
        .getCategoryList()
        .then(data => response.json(data))
        .catch(err => console.log(err))
})

module.exports = router