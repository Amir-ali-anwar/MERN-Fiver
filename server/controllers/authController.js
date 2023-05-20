import User from '../model/User.js'
import StatusCodes from 'http-status-codes'
import {BadRequestError} from '../errors/index.js'
const register = async (req, res, next) => {
  const { username, email, password,country } = req.body
  if (!username || !email || !password) {
    throw new BadRequestError("Please Provide Username,Email,Password")
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
