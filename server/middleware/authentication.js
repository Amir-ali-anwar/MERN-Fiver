import jwt from "jsonwebtoken";
import { UnauthenticatedError } from "../errors/index.js";

const auth = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    throw new UnauthenticatedError("No authorized");
  }
  const token = authHeader.split("")[1];
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.user = { UserID: payload.UserID, name: payload.Username };
  } catch (error) {
    throw new UnauthenticatedError("Authorization invalid");
  }
};
