import User from '../model/User.js'
import StatusCodes from 'http-status-codes'
const register = async (req, res, next) => {
  const { username, email, password,country } = req.body
  if (!username || !email || !password) {
    console.log("please provide all the values");
  }
  const user = await User.create({ username, email, password,country})
  res.status(StatusCodes.CREATED).json(user)
};
const login = async (req, res, next) => {
  res.send("login");
};

const logout = async (req, res, next) => {
  res.send("logout");
};

export { register, login, logout };
