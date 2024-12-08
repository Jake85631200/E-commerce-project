const User = require("../models/userModel");
const AppError = require("../utils/AppError");
const catchAsync = require("./../utils/catchAsync");

exports.getAllUsers = catchAsync(async (req, res, next) => {
  const users = await User.find();

  res.status(200).json({
    status: "success",
    result: users.length,
    data: users,
  });
});

exports.getUser = catchAsync(async (req, res, next) => {
  const user = await User.findById(req.params.id);

  if (!user) return next(new AppError("No user found with that ID!", 404));

  res.status(200).json({
    status: "success",
    data: {
      user,
    },
  });
});

exports.getProfile = catchAsync(async (req, res, next) => {
  const user = await User.findById(req.user.id);

  res.status(200).json({
    status: "success",
    data: { user },
  });
});

exports.updateUser = catchAsync(async (req, res, next) => {
  const user = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true, // 避免被帶入不該存在的值
  });

  if (!user) return next(new AppError("No user found with that ID!", 404));

  res.status(200).json({
    status: "success",
    data: {
      user,
    },
  });
});

exports.disableMe = catchAsync(async (req, res, next) => {
  await User.findByIdAndUpdate(req.user.id, { isActive: false });

  res.status(204).json({
    status: "success",
    data: null,
  });
});

exports.deleteUser = catchAsync(async (req, res, next) => {
  const user = await User.findByIdAndDelete(req.params.id);

  if (!user) return next(new AppError("No user found with that ID!", 404));

  res.status(204).json({
    status: "success",
    data: null,
  });
});
