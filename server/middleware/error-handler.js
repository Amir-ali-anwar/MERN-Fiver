import CustomAPIError from '../error/CustomAPIError.js'
const errorHandler = (err, req, res, next) => {
  
  
  return res.status(500).json({ msg: err });
};
export default errorHandler;

// there are three  types of errors that we are handling in this file, first one is the of our customAPI error(errors that we are throughing in the 
// from our files) and the second

//one is the default error