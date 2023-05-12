const register = async (req, res, next) => {
  res.send("register");
};
const login = async (req, res, next) => {
  res.send("login");
};

const logout = async (req, res, next) => {
  res.send("logout");
};

export { register, login, logout };
