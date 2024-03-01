const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userSchema = new Schema({
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    lowercase: true,
  },
  username: {
    type: String,
    required: [true, "Username is required"],
    unique: true,
    maxlength: [20, "Username can't be longer than 20 characters"],
    minlength: [3, "Username can't be shorter than 10 characters"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    maxlength: [30, "Password can't be longer than 20 characters"],
    minlength: [8, "Password can't be shorter than 10 characters"],
  },
  role: {
    type: String,
    enum: ["admin", "user"],
    default: "user",
  },
  validationToken: {
    type: String,
  },
});

userSchema.pre("save", async function (next) {
  const user = this;
  if (user.isModified("password")) {
    user.password = await bcrypt.hash(user.password, 8);
  }
  next();
});

userSchema.methods.generateAuthToken = async function () {
  const user = this;
  const token = jwt.sign(
    { _id: user._id, email: user.email, role: user.role },
    process.env.JWT_KEY,
    {
      expiresIn: "7d",
    }
  );
  return token;
};

userSchema.statics.findByCredentials = async (email, password) => {
  const user = await User.findOne({ email });
  if (!user) {
    throw new Error("Invalid login credentials");
  }
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new Error("Invalid login credentials");
  }
  return user;
};

const User = mongoose.model("User", userSchema);

module.exports = User;
