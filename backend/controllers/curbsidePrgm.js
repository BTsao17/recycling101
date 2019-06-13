const knexConfig = require('../knexfile')
const knex = require('knex')(knexConfig)

module.exports = {
    getProgram: (city) => {
        return new Promise((resolve, reject) => {
            const sqlQuery = 'select pc.categoryname, p.productname from cities C join cities_productcategories CPC on C.id = CPC.city_id join productcategories PC on CPC.productcategory_id = PC.id join products P on P.productcategory_id = PC.id where C.cityname = ?'
            knex
                .raw(sqlQuery, [`${city}`])
                .then((result) => {
                    let rawResults = result.rows
                    const data = []
                    rawResults.forEach(row => {
                        const index = data.findIndex(x => {
                            return x.category === row.categoryname
                        })
                        if (index >= 0) {
                            data[index].items.push(row.productname)
                        } else {
                            data.push({
                                category: row.categoryname,
                                items: [row.productname]
                            })
                        }
                    })
                    resolve(data)
                })
                .catch(err => reject(err))
        })
    }
}