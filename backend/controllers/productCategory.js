const knexConfig = require('../knexfile')
const knex = require('knex')(knexConfig)

module.exports = {
    getCategoryList: () => {
        return new Promise((resolve, reject) => {
            const sqlQuery = 'select PC.categoryname from productcategories PC'
            knex
                .raw(sqlQuery)
                .then((results) => {
                    let rawResults = results.rows
                    const data = []
                    rawResults.forEach(row => {
                        data.push(row.categoryname)
                    })
                    resolve(data)
                })
                .catch(err => reject(err))
        })
    }
}