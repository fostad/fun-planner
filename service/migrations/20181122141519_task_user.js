
exports.up = function(knex, Promise) {
  return knex.schema.createTable('task_user', table => {
    table.increments();
    table.timestamps();
    table.integer('task_id');
    table.integer('user_id');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('task_user');
};
