const mongoose = require("mongoose");
const validator = require("validator");

// Used for password hashing, simple to use, provides high security, especially suitable for storing user passwords.
const bcrypt = require("bcrypt");
// Suitable for scenarios requiring various encryption and hashing functions, highly flexible, but requires more encryption knowledge.
const crypto = require("crypto");

const BCRYPT_SALT_ROUNDS = 12;

const userSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    auto: true,
  },
  name: {
    type: String,
    required: [true, "A user must have name."],
    trim: true,
  },
  image: {
    type: String,
    default: "https://cdn.jsdelivr.net/gh/alohe/memojis/png/notion_8.png",
  },
  email: {
    type: String,
    required: [true, "A user must have a email."],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, "Please provide a valid email."],
  },
  password: {
    type: String,
    required: [true, "A User must have set a password."],
    minlength: [8, "A User password must be more than 8 characters."],
    select: false, // don't show up in output
  },
  passwordConfirm: {
    type: String,
    required: [true, "Please confirm your password."],
    validate: {
      validator: function (el) {
        return el === this.password;
      },
      message: "Passwords are not the same!",
    },
  },
  cart: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Cart",
  },
  gender: {
    type: String,
    required: [true, "Please provide your gender."],
    enum: ["female", "male", "other"],
  },
  address: {
    type: String,
    required: [true, "Please provide a address."],
  },
  phone_number: {
    type: String,
    required: [true, "Please provide a phone number."],
  },
  role: {
    type: String,
    enum: ["user", "seller", "admin"],
    default: "user",
  },
  passwordChangedAt: Date,
  passwordResetToken: String,
  passwordResetExpires: Date,
  isActive: {
    type: Boolean,
    default: true,
    // select: false,
  },
});

// correctPassword method: Compare the password with the DB password during login
userSchema.methods.correctPassword = async function (
  candidatePassword,
  userPassword
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

// changePasswordAfter: Check if the password has been changed after the JWT timestamp
userSchema.methods.changePasswordAfter = function (JWTTimeStamp) {
  if (passwordChangedAt) {
    const currentTimeStamp = parseInt(
      this.passwordChangedAt.getTime() / 1000,
      10
    );

    // If the password change timestamp is greater than the JWT timestamp, it means the password was changed after the token was issued
    return currentTimeStamp > JWTTimeStamp;
  }
  // If there is no passwordChangedAt, it means the password has never been changed
  return false;
};

// resetPassword method: Used to create a resetToken needed by the forgetPassword function
userSchema.methods.createPasswordResetToken = function () {
  const resetToken = crypto.randomBytes(32).toString("hex");

  // Encrypted and store resetToken into DB
  this.passwordResetToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");

  // Set expiration for this resetToken
  this.passwordResetExpires = Date.now() + 10 * 60 * 1000;

  return resetToken;
};

// Middleware
// Encrypt password when save
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  this.password = await bcrypt.hash(this.password, BCRYPT_SALT_ROUNDS);

  this.passwordConfirm = undefined;
  next();
});

// Hide not active user
userSchema.pre(/^find/, function (next) {
  this.where({ isActive: true });
  next();
});

userSchema.pre(/^find/, function (next) {
  this.populate({
    path: "cart",
    select: ["product_name", "price", "quantity"],
  });
  next();
});

// If password has changed, add passwordChangedAt field
userSchema.pre("save", function (next) {
  // password didn't change or new user
  if (!this.isModified("password") || this.isNew) return next();

  this.passwordChangedAt = Date.now() - 1000;
  next();
});

userSchema.methods.changedPasswordAfter = function (JWTTimestamp) {
  if (this.passwordChangedAt) {
    const changedTimestamp = parseInt(
      this.passwordChangedAt.getTime() / 1000,
      10
    );
    return JWTTimestamp < changedTimestamp;
  }

  // False means NOT changed
  return false;
};

const Users = mongoose.model("User", userSchema);
module.exports = Users;
