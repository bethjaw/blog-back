
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('group').del()
    .then(function () {
      // Inserts seed entries
      return knex('group').insert([
        {
          // id: 1,
          name: 'Group 1',
          blog_id: 3,
        },

      ]);
    });
};
