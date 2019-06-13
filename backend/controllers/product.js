const knexConfig = require('../knexfile')
const knex = require('knex')(knexConfig)

module.exports = {
    getProduct: (category) => {
        return new Promise((resolve, reject) => {
            const sqlQuery = 'select p.productname from productcategories PC join products P on pc.id = p.productcategory_id where pc.categoryname = ?'
            knex
                .raw(sqlQuery, [`${category}`])
                .then((results) => {
                    let rawResults = results.rows
                    const data = []
                    rawResults.forEach(row => {
                        data.push(row.productname)
                    })
                    resolve(data)
                })
                .catch(err => reject(err))
        })
    }
}