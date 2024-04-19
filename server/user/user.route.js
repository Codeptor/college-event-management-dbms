// user.routes.js

const express = require("express");
const userRouter = express.Router();
const userService = require("./user.services");

userRouter.post("/register", async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const user = await userService.createUser(username, email, password);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

userRouter.get("/:email", async (req, res) => {
  const { email } = req.params;
  try {
    const user = await userService.getUserByEmail(email);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

userRouter.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const user = await userService.getUserById(id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

userRouter.put("/:id", async (req, res) => {
  const { id } = req.params;
  const userData = req.body;
  try {
    const user = await userService.updateUserById(id, userData);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

userRouter.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const user = await userService.deleteUserById(id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = userRouter;
