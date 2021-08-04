const express = require('express');
const router = express.Router();

// router.get('/api/users/register');
router.get('/', (req, res) => {
  res.json({ msg: 'Message depuis le fichier update' });
});

module.exports = router;
