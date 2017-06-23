
exports.up = function(knex) {
  return knex.schema.createTable('users', (table) => {
    table.increments()
    table.string('username').notNullable().defaultTo('')
    table.specificType('password', 'char(255)').notNullable()
    table.string('email').notNullable().unique()
    table.text('profile_picture_img').defaultTo('')
    table.text('bio').defaultTo('')
    table.boolean('admin').defaultTo(false)
    table.boolean('moderator').defaultTo(false)
    table.boolean('professional').defaultTo(false)
    table.boolean('verified_user').defaultTo(false)
    table.timestamps(true, true)
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('users');
};
