const mongoose = require("mongoose");
const validator = require("validator");

// 專門用於密碼哈希，簡單易用，提供了高安全性，特別適合用於用戶密碼的存儲。
const bcrypt = require("bcrypt");
// 適合需要多種加密和哈希功能的場景，靈活性高，但需要更多的加密知識。
const crypto = require("crypto");

const BCRYPT_SALT_ROUNDS = 12;

const userSchema = new mongoose.Schema(
  {
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
      required: [true, "A user must have last name."],
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
        message: "Please provide correct password.",
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
    isActive: {
      type: Boolean,
      default: true,
      // select: false,
    },
    passwordChangedAt: Date,
    passwordResetToken: String,
    passwordResetExpires: Date,
  },
  { timestamps: true }
);

// correctPassword method
userSchema.methods.correctPassword = async function (
  candidatePassword,
  userPassword
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

//resetPassword method
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

userSchema.pre(/^find/, function (next) {
  this.where({ isActive: true });
  next();
});

const Users = mongoose.model("User", userSchema);
module.exports = Users;
