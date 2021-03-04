// import du package HTTP natif de Node (permet de créer un serveur)
const http = require('http');
// const { type } = require('os');


const app = require('./app');

// la fonction normalizePort renvoie un port valide, qu'il soit de type numérique ou chaîne
const normalizePort = val => {
    const port = parseInt(val,10);
    if (isNaN(port)) {
        return val;
    }

    if (port >= 0) {
        return port;
    }
    return false;
};
const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

// la fonction errorHandler recherche les différentes erreurs et les gère de manière appropriée. Elle est ensuite enregistrée dans le serveur.
const errorHandler = error => {
    if (error.syscall !== 'listen') {
        throw error;
    }

    const adress = server.address();
    const bind = typeof adress === 'string' ? 'pipe' + adress : 'port: ' + port;
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges.');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use.')
            process.exit(1);
            break;
        default:
            throw error;
    }
};

// creation du serveur et Appel de l'application 'Express' pour envoie des arguments
const server = http.createServer(app);

// un écouteur d'évènements est également enregistré, consignant le port ou le canal nommé sur lequel le serveur s'exécute dans la console.
server.on('error', errorHandler);
server.on('listening', ()=>{
    const adress = server.address();
    const bind = typeof adress === 'string' ? 'pipe ' + adress : 'port ' + port;
    console.log('listening on ' + bind);
});

server.listen(port);