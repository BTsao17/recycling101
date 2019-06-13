exports.up = function(knex, Promise) {
  return knex.schema.createTable('cities', function (table) {
      table.increments('id').primary();
      table.string('name').notNullable();
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('cities')
}