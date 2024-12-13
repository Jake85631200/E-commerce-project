const User = require("../models/userModel");
const AppError = require("../utils/AppError");
const catchAsync = require("./../utils/catchAsync");
// multer: process "multipart/form-data" request, even not uploading files/photos
const multer = require("multer");
const sharp = require("sharp");
const cloudinary = require("cloudinary").v2;

// 配置 multer
const multerStorage = multer.memoryStorage();

const multerFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image")) {
    cb(null, true);
  } else {
    cb(new AppError("Not an image! Please upload only images", 400), false);
  }
};

const upload = multer({ storage: multerStorage, fileFilter: multerFilter });

// 配置 Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_SECRET_KEY,
});

exports.uploadUserImage = [
  // middleware 1
  upload.single("image"),
  // middleware 2
  catchAsync(async (req, res, next) => {
    // sharp -> process and compress file
    if (req.file === undefined) {
      return next();
    }
    const buffer = await sharp(req.file.buffer).resize(500, 500).toFormat("jpeg").jpeg({ quality: 90 }).toBuffer();

    // upload image into cloudinary
    const uploadResult = await new Promise((resolve, reject) => {
      const stream = cloudinary.uploader.upload_stream({ folder: "users" }, (error, result) => {
        if (error) return reject(error);
        resolve(result);
      });
      stream.end(buffer);
    });
    // save image URL
    req.file.cloudinaryUrl = uploadResult.secure_url;

    next();
  }),
];

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

exports.updateMe = catchAsync(async (req, res, next) => {
  if (req.file !== undefined) {
    req.body.image = req.file.cloudinaryUrl;
  }
  const updatedUser = await User.findByIdAndUpdate(req.user._id, req.body, {
    new: true,
    runValidators: true, // 避免被帶入不該存在的值
  });

  res.status(200).json({
    status: "success",
    data: {
      user: updatedUser,
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
