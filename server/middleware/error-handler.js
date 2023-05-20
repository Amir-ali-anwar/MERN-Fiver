import CustomAPIError from "../error/CustomAPIError.js";
import StatusCodes from "http-status-codes";
const errorHandler = (err, req, res, next) => {
  const customError = {
    statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
    msg: err.message || "Something went wrong",
  };
  if (err.code && err.code === 11000) {
    customError.msg = `Duplicate value entered for the ${Object.keys(
      err.keyValue
    )} Please entered anoter value`;
  }
  if (err.name === 'ValidationError') {
    customError.msg = Object.values(err.errors).map((item) => item.message.join(',')),
    customError.statusCode = 400
  }
  if (err.name === 'CastError') {
    CustomError.msg = `No item found with the ${err.value}`
    CustomError.statusCode = 400
  }
  return res.status(customError.statusCode).json({ msg: customError.msg });
};
export default errorHandler;





// There are three types of mongoose errors
// 1) Validation errors , 2) Duplicate Error, 3) Cast Error(syntax error like mongoose id or something another)

// there are three  types of errors that we are handling in this file, first one is the of our customAPI error(errors that we are throughing in the
// from our files) and the second

//one is the default error
