const Users = require("./../models/userModel");

exports.getAllUsers = async (req, res, next) => {
  const users = await Users.find();

  res.status(200).json({
    status: "success.",
    result: users.length,
    data: users,
  });
};

exports.getUser = async (req, res, next) => {
  const user = await Users.findById(req.params.id);

  res.status(200).json({
    status: "success.",
    data: {
      user,
    },
  });
};

exports.createUser = async (req, res, next) => {
  const user = await Users.create(req.body);

  res.status(201).json({
    status: "success.",
    user,
  });
};

exports.updateUser = async (req, res, next) => {
  const user = await Users.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json({
    status: "success.",
    data: {
      user,
    },
  });
};

exports.deleteUser = async (req, res, next) => {
  const user = await Users.findByIdAndDelete(req.params.id);

  res.status(204).json({
    status: "success.",
    data: null,
  });
};