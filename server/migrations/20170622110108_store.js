
exports.up = function(knex) {
  return knex.schema.createTable('store', (table) => {
    table.increments()
    table.string('dosha').notNullable()
    table.string('product_name').notNullable()
    table.text('img').notNullable()
    table.string('price').notNullable()
    table.string('size').notNullable()
    table.text('description').defaultTo('')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('store');
};
