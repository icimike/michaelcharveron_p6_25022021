const mongoose = require('mongoose');

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
  
  module.exports = mongoose.model('Sauces', SaucesSchema);