exports.up = function(knex) {
  return knex.schema.createTable('posts', (table) => {
    table.increments()
    table.string('title').notNullable()
    table.integer('user_id').references('users.id').onDelete('CASCADE')
    table.text('description').defaultTo('')
    table.integer('pose_id').references('poses.id').onDelete('CASCADE')
    table.text('post_img').notNullable().defaultTo('')
    table.text('post_video').defaultTo('')
    table.timestamps(true, true)
  })
}

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('posts')
}
