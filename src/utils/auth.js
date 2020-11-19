// json related
const jwt = require('jsonwebtoken');
const { SECRET_KEY, EXPIRATION_DATE } = require('../config');

const newToken = user => {
  const payload = {
    username: user.username,
  };
  return jwt.sign(payload, SECRET_KEY, {
    expiresIn: EXPIRATION_DATE,
  });
};

exports.newToken = newToken;

const verifyToken = token =>
  new Promise((resolve, reject) => {
    jwt.verify(token, SECRET_KEY, (err, payload) => {
      if (err) return reject(err);
      resolve(payload);
    });
  });

exports.verifyToken = verifyToken;

// middleware
const authenticateUser = async (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(401).json({ message: 'token must be included' });
  }

  const token = req.headers.authorization;
  // let payload;
  try {
    await verifyToken(token);
  } catch (e) {
    return res.status(401).json({ message: 'token is invalid' });
  }
//   const user = await UserModel.findById(payload._id)
//     .select('-password')
//     .lean()
//     .exec();

//   if (!user) {
//     return res.status(401).json({ message: 'user is not found' });
//   }

//   req.user = user;
  next();
};

exports.authenticateUser = authenticateUser;
