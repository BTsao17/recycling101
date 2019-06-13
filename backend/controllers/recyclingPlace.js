const knexConfig = require('../knexfile')
const knex = require('knex')(knexConfig)

module.exports = {
    findRecyclingPlace: (city, category, item) => {
        return new Promise((resolve, reject) => {
            knex
                .raw(`select RP.* from productcategories PC join products P on PC.id = P.productcategory_id join products_recyclingplaces PRP on P.id = PRP.product_id join recyclingplaces RP on RP.id = PRP.recyclingplace_id join cities C on RP.city_id = C.id where C.cityname = ? and PC.categoryname = ? and P.productname = ?`, [`${city}`, `${category}`, `${item}`])
                .then((results) => {
                    let rawResults = results.rows
                    resolve(rawResults)
                })
                .catch(err => reject(err))
        })
    }
}