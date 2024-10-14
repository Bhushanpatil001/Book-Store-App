const User = require("../model/user_model.js");
const bcryptjs = require("bcryptjs");

const signup = async (req, res) => {
  try {
    const { fullName, email, password } = req.body;

    // Check if the user already exists
    const userExist = await User.findOne({ email });

    if (userExist) {
      return res.status(400).send("User Already Exists");
    }

    // Hash the password
    const hashPassword = await bcryptjs.hash(password, 10);

    // Create a new user
    const createUser = new User({
      fullName,
      email,
      password: hashPassword,
    });

    // Save the user to the database
    await createUser.save();
    res.status(201).json({ message: "User Created Successfully" });

  } catch (error) {
    console.log("Error", error);
    res.status(500).send("Internal Server Error");
  }
};

const login = async(req, res) => {
  try {
      const { email, password } = req.body;
      const user = await User.findOne({ email });
      console.log(user.password)
      const isMatch = await bcryptjs.compare(password, user.password);

      if (!user || !isMatch) {
          return res.status(400).json({ message: "Invalid username or password" });
      } else {
          res.status(200).json({
              message: "Login successful",
              user: {
                  _id: user._id,
                  fullname: user.fullname,
                  email: user.email,
              },
          });
      }
  } catch (error) {
      console.log("Error: " + error.message);
      res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  signup,
  login,
};
