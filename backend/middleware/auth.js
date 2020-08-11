const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

if (process.env.NODE_ENV === 'DEVELOPMENT') {
  dotenv.config({ path: './config/config.env' });
}

module.exports = function (req, res, next) {
  // Get token from header
  const token = req.header('x-auth-token');
  // Check if no token
  if (!token)
    return res.status(401).json({ msg: 'No token, authorization denied' });
  // Verify the token
  try {
    const decoded = jwt.verify(token, process.env.jwtSecret);
    req.user = decoded.user;
    next();
  } catch (error) {
    res.status(401).json({ msg: 'Token is not valid' });
  }
};
