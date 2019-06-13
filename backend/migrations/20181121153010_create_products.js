
exports.up = function(knex, Promise) {
    return knex.schema.createTable('products', function (table) {
        table.increments('id').primary();
        table.integer('productcategory_id').references('productcategory.id')
        table.string('name').notNullable();
    })
  }
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable('products')
  }
  