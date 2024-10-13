const Users = require("./../models/userModel");

exports.getAllUsers = async (req, res, next) => {
  const users = await Users.find();

  res.status(200).json({
    status: "success",
    result: users.length,
    data: users,
  });
};
