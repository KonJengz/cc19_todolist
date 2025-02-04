const bcrypt = require("bcryptjs");
const hashService = {};

hashService.hash = (plaintext) => {
  return bcrypt.hash(plaintext, 12);
};

hashService.compare = (plaintext, hashValue) => {
  return bcrypt.compare(plaintext, hashValue);
};

module.exports = hashService;
