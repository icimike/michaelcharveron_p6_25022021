const mongoose = require('mongoose');

// nous créons un schéma de données qui contient les champs souhaités pour chaque Sauces, indique leur type ainsi que leur caractère (obligatoire ou non).

const SaucesSchema = mongoose.Schema({
    // _id est créer automatiquement 
    name: { type: String, required: true },
    manufacturer: { type: String, required: true },
    description: { type: String, required: true },
    mainPepper: { type: String, required: true },
    heat: { type: Number, required: true },
    imageUrl: { type: String, required: true },
    userId: { type: String, required: true },
    likes: { type: Number},
    dislikes: {type: Number},
    usersLiked: [{type: String}],
    usersDisliked: [{type: String}]
  });
  
  // nous exportons ce schéma en tant que modèle Mongoose appelé « Sauces », le rendant par là même disponible pour notre application Express.
  module.exports = mongoose.model('Sauces', SaucesSchema); 