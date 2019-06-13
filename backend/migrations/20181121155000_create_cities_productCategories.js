exports.up = function(knex, Promise) {
    return knex.schema.createTable('cities_productcategories', function (table) {
        table.increments('id').primary()
        table.integer('city_id').references('cities.id')
        table.integer('productcategory_id').references('productcategories.id')
    })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('cities_product_categories')
}