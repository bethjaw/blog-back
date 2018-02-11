
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('user_group', (table) => {
      table.increments()
      table.integer('group_id')
      table.integer('user_id')
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('user_group')
  ])
};
