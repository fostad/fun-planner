
exports.up = function(knex, Promise) {
  return knex.schema.createTable('user', table => {
    table.increments();
    table.timestamps();
    table.text('email').unique();
    table.text('name');
    table.text('givenname');
    table.text('familyname');
    table.text('image');
    table.text('phone');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('user');
};
