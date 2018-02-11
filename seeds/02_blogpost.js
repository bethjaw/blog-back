
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('blogpost').del()
    .then(function () {
      // Inserts seed entries
      return knex('blogpost').insert([
        {
          // id: 1,
          title: 'First Blog',
          content: 'This is a test blog post.',
          user_id: 1,
        },
        {
          // id: 2,
          title: 'This is another blog',
          content: 'This one is by another user.  I can read it.',
          user_id: 2,
        },
        {
          // id: 3,
          title: 'Group Blog',
          content: 'Someone posted this blog for a group.',
          user_id: 1,
        },
      ]);
    });
};
