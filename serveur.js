// Ici ,je code mon serveur.js

// Importation du module HTTP est de stockée dans une constante (variable)nommée http
const http = require('http');
// Maintenant, je crée un serveur web en utilisant la méthode createServer du module HTTP


// ici j'ai affaire a une fonction fléchée (function) qui prend deux paramètres req (requête) et res (réponse)
const server = http.createServer((req, res) => {
    //
    res.end('Bonjour je suis le serveur Node.js!');
 }); 
// Le serveur écoute sur le port 
// Port signifie l'adresse locale de mon ordinateur
server.listen(3000);
