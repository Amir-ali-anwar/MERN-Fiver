const CreateJWt = async ({payload}) => {
  try {
     const token = await jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_LIFETIME,
    });
    return token;
  } catch (error) {
    throw new BadRequestError(error);
  }
};
const attachCookiesToResponse = ({ res, user }) => {
    
};

export  {CreateJWt,attachCookiesToResponse};
