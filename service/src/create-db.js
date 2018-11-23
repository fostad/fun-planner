const config = require('../knexfile');
const knex = require('knex')(config);

knex.raw('create database ')
  .then(() => console.log('db created '))
  .catch(e => {
    if (e.code === '42P04') {
      console.log('database already exists');
    } else {
      console.log(e);
    }
  })
  .finally(() => knex.destroy());
