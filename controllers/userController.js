const User = require('../models/User');
const bcryptjs = require('bcryptjs');
const tokenHelper = require('./jwt');
const user = require('../models/User');

exports.registerUser = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ msg: 'User already exists' });
    }
    user = new User({
      name,
      email,
      password,
    });
    const salt = await bcryptjs.genSalt(10);
    user.password = await bcryptjs.hash(user.password, salt);
    await user.save();

    const token = await tokenHelper.createToken({ user: { id: user.id } });
    res.json({ token });
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
};
