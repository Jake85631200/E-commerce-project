const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");
const BCRYPT_SALT_ROUNDS = 12;

const userSchema = new mongoose.Schema(
  {
    _id: {
      type: mongoose.Schema.Types.ObjectId,
      auto: true,
    },
    first_name: {
      type: String,
      require: [true, "A user must have first name."],
    },
    last_name: {
      type: String,
      require: [true, "A user must have last name."],
    },
    image: { type: String, default: "default.jpg" },
    email: {
      type: String,
      require: [true, "A user must have a email."],
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
      require: [true, "Please confirm your password."],
      validate: {
        validator: function (el) {
          return el === this.password;
        },
        message: "Please provide correct password.",
      },
    },
    gender: {
      type: String,
      require: [true, "Please provide your gender."],
      enum: ["Female", "Male", "Other"],
    },
    address: {
      type: String,
      require: [true, "Please provide a address."],
    },
    phone_number: {
      type: String,
      require: [true, "Please provide a phone number."],
    },
  },
  { timestamps: true }
);

//
// correctPassword method
userSchema.methods.correctPassword = async function (
  candidatePassword,
  userPassword
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

// Middleware

// encrypt password when
userSchema.pre("save", async function (next) {
  // middleware -> can't use arrow function
  if (!this.isModified("password")) return next(); //isModified: Mongoose method，檢查字段是否被修改
  this.password = await bcrypt.hash(this.password, BCRYPT_SALT_ROUNDS);
  this.passwordConfirm = undefined;
  next();
});

const Users = mongoose.model("User", userSchema);
module.exports = Users;
