const { insert, getAll, getByKey } = require('./db');

const saveUser = user => {
  return insert(user, 'user');
};

const getAllUsers = () => {
  return getAll('user');
};

const getUser = id => {
  return getByKey(id, 'id', 'user');
};

module.exports = {
  saveUser,
  getAllUsers,
  getUser
};
