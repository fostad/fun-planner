
exports.up = function(knex, Promise) {
  return knex.schema.createTable('event', table => {
    table.increments();
    table.timestamps();
    table.text('title');
    table.date('date');
    table.integer('created_by');
    table.integer('updated_by');
  });
};

exports.down = function(knex, Promise) {

};
