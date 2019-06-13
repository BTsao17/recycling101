exports.up = function(knex, Promise) {
    return knex.schema.createTable('recyclingplaces', function (table) {
        table.increments('id').primary();
        table.integer('city_id').references('cities.id')
        table.string('name').notNullable()
        table.string('address').notNullable().unique()
        table.string('phone').notNullable()
        table.string('hours').notNullable()
        table.string('maplink').notNullable().unique()
        table.string('website').notNullable()
        table.string('note').notNullable()
    })
}

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('recyclingplaces')
}