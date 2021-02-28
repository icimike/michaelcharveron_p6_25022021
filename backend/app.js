// import des packages
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

// Ajout des routes pour l'identification & l'authentification
const saucesRoutes = require('./routes/sauces');
const userRoutes = require('./routes/user');

// initialisation de la variable app qui contiendra 'express'
const app = express();
app.use(cors());

// Connexion a la base de données MongoDB
mongoose.connect('mongodb+srv://mic:9avMYlGSjBDH0d4b@cluster0.tep76.mongodb.net/Cluster0?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

console.log (app._router);

// Cette partie configure et autorise les requêtes Multi-Origin; définit les Headers & les Methodes
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

// Définit la fonction json comme middleware global pour l'application
app.use(bodyParser.json());

app.use('/images', express.static(path.join(__dirname, 'images')));

// Enregistrement du routeur pour toutes les demandes effectuées vers /api/sauces.
app.use('/api/sauces', saucesRoutes);

// Enregistrement du routeur pour toutes les demandes effectuées vers /api/auth.
app.use('/api/auth', userRoutes);

// Permet d'exporter l'application créer (en l'occurence, elle devient accesible pour serveur.js)
module.exports = app;