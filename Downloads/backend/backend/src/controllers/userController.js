const User = require("../models/userModel");
const fileHandler = require("../utils/fileHandler");
const path = require("path");

const USERS_FILE = path.join(__dirname, "../data/users.json");

const createUser = async (req, res, next) => {
  try {
    const {
      firstName,
      lastName,
      address1,
      address2,
      city,
      state,
      zipcode,
      preferences,
      skills,
      dates,
      time,
    } = req.body;

    if (!firstName || !lastName || !address1 || !city || !state || !zipcode) {
      return res
        .status(400)
        .json({
          message:
            "Required fields: firstName, lastName, address1, city, state, and zipcode.",
        });
    }

    const newUser = new User({
      firstName,
      lastName,
      address1,
      address2,
      city,
      state,
      zipcode,
      preferences,
      skills,
      dates,
      time,
    });

    const users = await fileHandler.readJSON(USERS_FILE);
    users.push(newUser);

    await fileHandler.writeJSON(USERS_FILE, users);

    res
      .status(201)
      .json({ message: "User created successfully.", user: newUser });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createUser,
};