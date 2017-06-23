exports.up = function(knex) {
  return knex.schema.createTable('comments', (table) => {
    table.increments()
    table.integer('likes').defaultTo(0)
    table.boolean('verified').defaultTo(false)
    table.text('comment_text').notNullable().defaultTo('')
    table.text('comment_img').defaultTo('')
    table.integer('user_id').references('users.id').onDelete('CASCADE')
    table.integer('post_id').references('posts.id').onDelete('CASCADE')
    table.timestamps(true, true)
  })
}

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('comments')
}
