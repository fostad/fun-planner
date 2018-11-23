
exports.up = function(knex, Promise) {
  return knex.schema.createTable('vote', table => {
    table.increments();
    table.timestamps();
    table.integer('game_id');
    table.integer('like_count');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('vote');
};
