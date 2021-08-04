const express = require('express');
const router = express.Router();
const Uer = require('../../../models/User');

// router.get('/api/users/register');
router.post('/', async (req, res) => {
  const user = new User({
    email: req.body.email,
    password: req.body.password,
  });

  await user.save();

  res.json({ msg: 'votre compte a été créé depuis register.js' });
});

module.exports = router;
