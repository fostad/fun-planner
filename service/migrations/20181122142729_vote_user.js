
exports.up = function(knex, Promise) {
  return knex.schema.createTable('vote_user', table => {
    table.increments();
    table.timestamps();
    table.integer('vote_id');
    table.integer('user_id');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('vote_user');
};
