
exports.up = function(knex, Promise) {
  return knex.schema.createTable('game', table => {
    table.increments();
    table.timestamps();
    table.text('name');
    table.text('description');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('game');
};
