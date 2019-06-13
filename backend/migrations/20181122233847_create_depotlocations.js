exports.up = function(knex, Promise) {
    return knex.schema.createTable('depotlocations', function (table) {
        table.increments('id').primary();
        table.integer('city_id').references('cities.id')
        table.string('address').notNullable().unique()
        table.string('phone').notNullable()
        table.string('hours').notNullable()
        table.string('maplink').notNullable().unique()

    })
}

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('depotlocations')
}
