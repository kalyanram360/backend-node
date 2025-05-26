import { asynchandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/apiError.js";
import { User } from "../models/user.model.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";

import ApiResponce from "../utils/ApiResponce.js";

const registerUser = asynchandler(async (req, res) => {
  const { fullname, email, username, password } = req.body;
  console.log(fullname, email, username, password);
  if (
    [fullname, email, username, password].some((field) => field?.trim() === "")
  ) {
    throw new ApiError(400, "All fields are required");
  }

  User.findOne({
    $or: [{ email }, { username }],
  }).then((user) => {
    if (user) {
      throw new ApiError(
        409,
        "User already exists with this email or username"
      );
    }
  });

  const avatarLocalpath = req.files?.avatar[0]?.path;
  const coverImageLocal = req.files?.coverImage[0]?.path;
  if (!avatarLocalpath) {
    throw new ApiError(400, "Avatar and cover image are required");
  }

  const avatar = await uploadOnCloudinary(avatarLocalpath);
  const coverImage = await uploadOnCloudinary(coverImageLocal);
  if (!avatar || !coverImage) {
    throw new ApiError(500, "Failed to upload images");
  }
  User.create({
    fullname,
    email,
    username,
    password,
    avatar: avatar.url,
    coverImage: coverImage.url,
  });
  const createUser = await User.findById(User._id);

  return res.status(201).json(
    new ApiResponce({
      message: "User registered successfully",
      user: createUser,
    })
  );
});

export { registerUser };
