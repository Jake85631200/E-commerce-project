const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");
const { encryptPassword } = require("./../middleware/authMiddleware");

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
// encrypt password when save
userSchema.pre("save", encryptPassword);

userSchema.pre(/^find/, function (next) {
  this.where({ isActive: true });
  next();
});

const Users = mongoose.model("User", userSchema);
module.exports = Users;
