﻿const config = require('config.json');
const jwt = require('jsonwebtoken');
const axios = require('axios');

module.exports = {
    authenticate,
    getAll
};

async function authenticate({ username, password }) {
  const response = await axios.get('http://localhost:3000/users');
  const users = response.data;
  const user = users.find(u => u.username === username && u.password === password);

  if (!user) throw 'Username or password is incorrect';

  // create a jwt token that is valid for 7 days
  const token = jwt.sign({ sub: user.id }, config.secret, { expiresIn: '7d' });

  return {
    ...omitPassword(user),
    token
  };
}


async function getAll() {
  const response = await axios.get('http://localhost:3000/users');
  const users = response.data;
  return users.map(u => omitPassword(u));
}

// helper functions

function omitPassword(user) {
    const { password, ...userWithoutPassword } = user;
    return userWithoutPassword;
}