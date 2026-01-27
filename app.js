// Ici , je crée mon application expressJS

// Importation du framework et de le stockée dans une constante (variable) nommée expressjs
const express = require('express');

//j'initialise mon application expressJS
const app = express();

app.use((req, res, next) => {
    console.log(" Je suis un middleware dans le serveur");//vas permettre d'afficher un message dans le terminal
    next();
});


/* je define une route qui retourne un message json
app.use((req, res,next) => {
    res.json({message:"hiiiiiiiiii !"});// envoie une réponse sur json
    next();// permet de passer au middleware suivant
});*/

//// je define la route par défaut

app.use((req, res, next) => {
    console.log("Bonjour, je suis votre application ExpressJS!");//affiche un message dans le terminal          
    next();// permet de passer au middleware suivant
});


app.use('/api/fruit', (req, res, next) => {
    console.log("je passe dans la route des /api/fruit");//
    next();
});// Je définis une route pour la racine de mon application

app.use((req, res,next) => {
    res.setHeader('Access-Control-Allow-Origin','*');//permet d'autoriser l'accès à mon API depuis n'importe quelle origine.Les en-têtes utilisée ici sont .
    res.setHeader('Access-Control-Allow-Headers','Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');//permet d'autoriser certains en-têtes dans les requêtes.
    res.setHeader('Access-Control-Allow-Methods','GET, POST, PUT, DELETE, PATCH, OPTIONS');//permet d'autoriser certaines méthodes HTTP pour les requêtes.
    next();
});
    
//mon fruit
app.use('/api/fruit', (req, res) => {
const fruit = [
        {
            //ici je crée un objet fruit
            id: 1,
            nom:"Banane",
            descriptions:"La banane est un fruit tropical sucré et nutritif, riche en potassium.",
            prix:15
        },
      
        {
            id: 2,
            nom:"Pomme",
            descriptions:"La pomme est un fruit croquant et juteux, disponible en plusieurs variétés, riche en fibres.",
            prix:10
        },
        

        {
            id: 3,
            nom:"Orange",
            descriptions:"L'orange est un agrume sucré et acidulé, riche en vitamine C .",
            prix:12 
        }
];





//En terme de réponse, je veux envoyer la liste des fruits

res.status(200).json(fruit);
}); 



// j'exporte mon application expressJS pour pouvoir l'utiliser dans serveur.js

module.exports = app;