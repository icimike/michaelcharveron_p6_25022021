### Projet 6 - Construire une API sécurisée pour l'application d'avis gastronomiques So Pekocko

Développer une application d’évaluation de ses sauces piquantes, appelée “Piquante”.
Le MVP du projet sera une application web permettant aux utilisateurs d’ajouter leurs sauces préférées et de liker ou disliker les sauces ajoutées par les autres utilisateurs.

Voir : [Le projet sur OpenClassrooms](https://openclassrooms.com/fr/projects/676/assignment "Cliquez pour voir le projet")

### Exigence du projet

Exigences concernant la sécurité :
* l’API doit respecter le RGPD et les standards OWASP
* le mot de passe des utilisateurs doit être chiffré
* 2 types de droits administrateur à la base de données doivent être définis : un accès
pour supprimer ou modifier des tables, et un accès pour éditer le contenu de la base
de données
* la sécurité de la base de données MongoDB (à partir d’un service tel que MongoDB
Atlas) doit être faite de telle sorte que le validateur puisse lancer l’application depuis
sa machine
* l’authentification est renforcée sur les routes requises
* les mots de passe sont stockés de manière sécurisée
* les adresses mails de la base de données sont uniques et un plugin Mongoose

### Objectifs et Compétences évaluées

***Le but est de créer le backend de l'application, le frontend étant déjà codé et fourni***

* Implémenter un modèle logique de données conformément à la réglementation
* Stocker des données de manière sécurisée
* Mettre en œuvre des opérations CRUD de manière sécurisée

### Installation

* Cloner ce projet depuis GitHub [github](https://github.com/OpenClassrooms-Student-Center/dwj-projet6).

### Faire tourner le Frontend

* Ouvrir le terminal sur ce dossier et exécuter  `npm install` pour installer les dépendances.
* Exécuter `npm install node-sass` pour installer sass.
* Le projet a été généré avec Angular CLI version 7.0.2.
* Démarrer ng serve (ou `npm start`) pour avoir accès au serveur de développement.
* Rendez-vous sur `http://localhost:4200`.
* L'application va se recharger automatiquement si vous modifiez un fichier source.

### Faire tourner le Backend

* Ouvrir le terminal sur ce dossier.
* Pour utiliser le serveur, chargez le package nodemon : `npm install -g nodemon`.
* Puis lancez le serveur: `nodemon server`.

### Connexion

* Ouvrir [localhost:4200](http://localhost:4200/) dans votre navigateur.
* Pour s'inscrire sur l'application, l'utilisateur doit fournir un email et un mot de passe contenant 8 caractères minimum (dont 1 chiffre).


### Utilisé dans ce projet

| Technologies             |    Outils          |
|:------------------------:|:------------------:|
| Framework: Express       | Visual Studio Code |
| Serveur: NodeJS          | Git/GitHub         |
| Base de données: MongoDB | Mongoose           |
| Javascript               |--------------------|

* Hébergement sur MongoDB Atlas
* Toutes les opérations de la base de données utilisent le pack Mongoose avec des schémas de données stricts.


