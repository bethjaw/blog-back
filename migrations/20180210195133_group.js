
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('group', (table) => {
      table.increments()
      table.string('name')
      table.integer('blog_id')
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('group')
  ])
};
