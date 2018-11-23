const config = require('../../knexfile');
const knex = require('knex')(config);

const insert = (entry, table) => {
  const now = new Date();
  entry.created_at = now;
  entry.updated_at = now;
  return knex(table).insert(entry, 'id')
    .then(r => {
      return r[0];
    });
};

const getAll = (table) => {
  return knex(table);
};

const getByKey = (value, key, table) => {
  return knex.select('*').from(table).where(key, value);
};

module.exports = {
  insert,
  getAll,
  getByKey
};
