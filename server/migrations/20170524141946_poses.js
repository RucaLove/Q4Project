
exports.up = function(knex) {
  return knex.schema.createTable('poses', (table) => {
    table.increments()
    table.string('pose_name_english').notNullable()
    table.string('pose_name_sanskrit').notNullable()
    table.string('pose_name_sanskrit_characters').defaultTo('')
    table.text('pose_img').defaultTo('')
    table.string('difficulty_level').defaultTo('')
    table.string('category').defaultTo('')
    table.text('description').defaultTo('')
    table.string('chakra_sanskrit').defaultTo('')
    table.string('chakra_english').defaultTo('')
    table.string('chakra_img').defaultTo('')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('poses');
};
