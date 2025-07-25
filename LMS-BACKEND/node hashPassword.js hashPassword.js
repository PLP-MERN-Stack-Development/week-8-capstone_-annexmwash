// hashPassword.js
const bcrypt = require('bcrypt');

const plainPassword = '123456'; // you can change this
const saltRounds = 10;

bcrypt.hash(plainPassword, saltRounds, function(err, hash) {
  if (err) {
    console.error('Error hashing password:', err);
  } else {
    console.log('Hashed password:', hash);
  }
});
