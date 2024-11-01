const mongoose = require("mongoose");
const validator = require("validator");

// 專門用於密碼哈希，簡單易用，提供了高安全性，特別適合用於用戶密碼的存儲。
const bcrypt = require("bcrypt");
// 適合需要多種加密和哈希功能的場景，靈活性高，但需要更多的加密知識。
const crypto = require("crypto");

const BCRYPT_SALT_ROUNDS = 12;

const userSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    auto: true,
  },
  first_name: {
    type: String,
    required: [true, "A user must have first name."],
  },
  last_name: {
    type: String,
  },
  image: { type: String, default: "default.jpg" },
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
  gender: {
    type: String,
    required: [true, "Please provide your gender."],
    enum: ["Female", "Male", "Other"],
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

// correctPassword method: 登入時，比對密碼和 DB 中密碼是否一致
userSchema.methods.correctPassword = async function (
  candidatePassword,
  userPassword
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

// changePasswordAfter: 以 payload 上的 JWTTimeStamp 確認 password 是否被更動過
userSchema.methods.changePasswordAfter = function (JWTTimeStamp) {
  if (passwordChangedAt) {
    const currentTimeStamp = parseInt(
      this.passwordChangedAt.getTime() / 1000,
      10
    );

    // 如果密碼更改的時間戳大於 JWT 的時間戳，表示密碼在 token 發行後被更改
    return currentTimeStamp > JWTTimeStamp;
  }
  // 如果沒有 passwordChangedAt，表示密碼從未更改過
  return false;
};

//resetPassword method: 用來 create 重置密碼時 forgetPassword fn 需要的 resetToken
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
// encrypt password when save
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
