const express = require('express');
const User = require('../../../models/User');
const router = express.Router();
const bcrypt = require('bcryptjs');

// router.get('/api/users/register');
router.post('/', async (req, res) => {
  try {
    const { email, password } = req.body;
    //récupérer l'utilisateur dans la base de données grâce à son email
    const user = await User.findOne({ email: email });
    //si email existe pas: utilisateur n'existe pas
    if (await bcrypt.compare(password, user.password)) {
      return res
        .status(200)
        .json({ msg: 'vous êtes maintenant connecté' }, user);
    }

    throw new Error('Le login a raté');
  } catch (e) {
    console.log(e.message);
  }

  //vérifier que le mot de passe qu'on a reçu dans dans req.body.password est compatible avec mdp en base de données

  //renvoyer l'objet utilisateur
});

module.exports = router;
