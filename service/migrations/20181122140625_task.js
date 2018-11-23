
exports.up = function(knex, Promise) {
  return knex.schema.createTable('task', table => {
    table.increments();
    table.timestamps();
    table.text('text');
    table.text('status');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('task');
};
