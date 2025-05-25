import { asynchandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/apiError.js";
import { User } from "../models/user.model.js";

const registerUser = asynchandler(async (req, res) => {
  const { fullName, email, username, password } = req.body;
  console.log(fullName, email, username, password);
  if (
    [fullName, email, username, password].some((field) => field?.trim() === "")
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

  req.files?.avatar[0], path;
});

export { registerUser };
