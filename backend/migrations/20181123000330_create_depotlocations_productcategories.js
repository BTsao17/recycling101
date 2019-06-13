exports.up = function(knex, Promise) {
    return knex.schema.createTable('depotlocations_productcategories', function (table) {
        table.increments('id').primary()
        table.integer('depotlocation_id').references('depotlocations.id')
        table.integer('productcategory_id').references('productcategories.id')
    }) 
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('depotlocations_product_categories')
}