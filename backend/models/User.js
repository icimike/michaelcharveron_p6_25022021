// import des packages
const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

// nous créons un schéma de données qui contient les champs souhaités pour chaque Utilisateur, E-mail et mot de passe Oblogatoire.
const userSchema = mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

// Nous verifions ensuite que l'adresse mail est unique dans la base de donnée
userSchema.plugin(uniqueValidator);

// nous exportons ce schéma en tant que modèle Mongoose appelé « User », le rendant par là même disponible pour notre application Express.
module.exports = mongoose.model('User', userSchema);