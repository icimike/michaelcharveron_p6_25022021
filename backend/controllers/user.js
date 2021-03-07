// Activation du mode STRICT de Javascript
"use strict";

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');

const User = require('../models/User');

// Signup
exports.signup = (req, res, next) => {
  // regex pour exiger un mot de passe fort (Minimum eight characters, at least one letter and one number)
  const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  // regex pour un mot de passe plus fort :
  // (Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character)
  // const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z0-9\d@$!%*?&]{8,}$/; 
  const password = req.body.password;
  const emailHash = crypto.createHash('sha256').update(req.body.email).digest('hex');

  if (password.match(regex)) {
  bcrypt.hash(password, 10)
    .then(hash => {
      const user = new User({
        email: emailHash,
        password: hash
      });
      user.save()
        .then(() => res.status(201).json({ message: 'Utilisateur créé !' }))
        .catch(error => res.status(400).json({ error }));
    })
    .catch(error => res.status(500).json({ error }));
  } else {
    throw new Error("Le mot de passe n'est pas assez sécurisé");
  }
};

// Login
exports.login = (req, res, next) => {

  const emailHash = crypto.createHash('sha256').update(req.body.email).digest('hex');

  User.findOne({ email: emailHash })
  .then(user => {
    if (!user) {
    return res.status(401).json({ error: 'Utilisateur non trouvé !' });
    }
    bcrypt.compare(req.body.password, user.password)
      .then(valid => {
        if (!valid) {
        return res.status(401).json({ error: 'Mot de passe incorrect !' });
        }
        res.status(200).json({
        userId: user._id,
        token: jwt.sign(
          { userId: user._id },
          'RANDOM_TOKEN_SECRET',
          { expiresIn: '24h' }
        )
        });
      })
    .catch(error => res.status(500).json({ error }));
  })
  .catch(error => res.status(500).json({ error }));
};

