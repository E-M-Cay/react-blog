const express = require('express');
const User = require('../../../models/User');
const router = express.Router();
const bcrypt = require('bcryptjs');

// router.get('/api/users/register');
router.post('/', async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = new User({
      email: email,
      password: password,
    });

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);

    await user.save();

    res.json({ msg: 'votre compte a été créé depuis register.js' });
  } catch (e) {
    res.status(500).json({ msg: e.message });
  }
});

module.exports = router;
