const users = [];

const userJoin = (id, username) => {
  const user = { id, username };

  users.push(user);

  return user;
};

const getCurrentUser = (id) => {
  return users.find(user => user.id === id)
};

module.exports = {
  userJoin,
  getCurrentUser
}