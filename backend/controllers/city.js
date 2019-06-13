const knexConfig = require('../knexfile')
const knex = require('knex')(knexConfig)

module.exports = {
    getCityList: () => {
        return new Promise((resolve, reject) => {
            const sqlQuery = 'select C.cityname from cities C'
            knex
                .raw(sqlQuery)
                .then((results) => {
                    let rawResults = results.rows
                    const data = []
                    rawResults.forEach(row => {
                        data.push(row.cityname)
                    })
                    resolve(data)
                })
                .catch(err => reject(err))
        })
    }
}