const bcrypt = require("bcrypt");
const BCRYPT_SALT_ROUNDS = 12;

exports.encryptPassword = async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, BCRYPT_SALT_ROUNDS);
  this.passwordConfirm = undefined;
  next();
};
