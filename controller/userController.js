const Users = require("./../models/userModel");

exports.getAllUsers = async (req, res, next) => {
  try {
    const users = await Users.find();

    res.status(200).json({
      status: "success.",
      result: users.length,
      data: users,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

exports.getUser = async (req, res, next) => {
  try {
    const user = await Users.findById(req.params.id);

    res.status(200).json({
      status: "success.",
      data: {
        user,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

exports.createUser = async (req, res, next) => {
  try {
    const user = await Users.create(req.body);

    res.status(201).json({
      status: "success.",
      user,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

exports.updateUser = async (req, res, next) => {
  try {
    const user = await Users.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    res.status(200).json({
      status: "success.",
      data: {
        user,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

exports.deleteUser = async (req, res, next) => {
  try {
    const user = await Users.findByIdAndDelete(req.params.id);

    res.status(204).json({
      status: "success.",
      data: null,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};
