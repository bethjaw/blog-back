
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('blogpost', (table) => {
      table.increments()
      table.string('title')
      table.text('content')
      table.integer('user_id')
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('blogpost')
  ])
};
