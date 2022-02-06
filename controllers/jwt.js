const jwt = require('jsonwebtoken');
const config = require('config');

exports.createToken = (data) => {
  const payload = {
    ...data,
  };
  return new Promise((resolve, reject) => {
    jwt.sign(
      payload,
      config.get('jwtSecret'),
      {
        expiresIn: 3600,
      },
      (err, token) => {
        if (err) {
          reject(err);
        }
        resolve(token);
      }
    );
  });
};
