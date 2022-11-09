const { Users } = require('../model/User');
const { v4: uuid } = require('uuid');

// get all Users
exports.getUsers = async (req, res) => {
  try {
    const users = Users;
    res.status(200).json({
      message: 'All users',
      users: users,
    });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

// get single user
exports.getUser = async (req, res) => {
  try {
    let id = req.params.id;
    const user = Users.find((user) => user.id === id);
    res.status(200).json({
      message: 'User Found',
      user,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// create new user
exports.createUser = async (req, res) => {
  try {
    const { email, name, password } = await req.body;
    const newUser = {
      id: uuid(),
      name,
      email,
      password,
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString(),
    };

    Users.push(newUser);

    res.status(201).json({
      message: 'User created',
      newUser,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update / edit user
exports.updateUser = async (req, res) => {
  try {
    let id = req.params.id;
    const user = Users.find((user) => user.id === id);
    const { email, name, password } = await req.body;
    user.email = email;
    user.name = name;
    user.password = password;
    res.status(200).json({
      message: 'User Updated',
      user,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// delete User
exports.deleteUser = async (req, res) => {
  try {
    let id = req.params.id;
    const user = Users.find((user) => user.id === id);
    Users.splice(Users.indexOf(user), 1);
    res.status(200).json({
      message: 'User Deleted',
      user,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
