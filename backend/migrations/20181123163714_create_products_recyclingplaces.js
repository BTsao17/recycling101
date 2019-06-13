exports.up = function(knex, Promise) {
    return knex.schema.createTable('products_recyclingplaces', function (table) {
        table.increments('id').primary()
        table.integer('product_id').references('products.id')
        table.integer('recyclingplace_id').references('recyclingplaces.id')
    })  
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('products_recyclingplaces')
}