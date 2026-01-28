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
// j'utilise la méthode GET pour récupérer les fruits
/* app.get('/api/fruit', (req, res,) => {
    app.get: est une méthode ExpressJS utilisée pour gérer les requêtes HTTP GET.
    /api/fruit: est le chemin de la route où les fruits seront récupérés.
    const fruit = [ ... ]: est un tableau contenant des objets représentant des fruits, chacun avec des propriétés telles que id, nom, descriptions et prix. 
*/
app.get('/api/fruit', (req, res,) => {
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


//je vais créér une route expresseJS en POST pour ajouter un fruit

/*app.post('/api/fruit', (req, res) => {
    app.post: est une méthode ExpressJS utilisée pour créer une nouvelle ressource.
    /api/fruit: est le chemin de la route où le fruit sera ajouté.
    (req, res) => { ... }: est une fonction de rappel (callback) qui sera exécutée lorsque cette route sera appelée. Elle prend deux paramètres :
    req: représente la requête entrante.
    res: représente la réponse que le serveur enverra au client.
});*/
app.post('/api/fruit', (req, res) => {
    res.status(201).json({
        message: "Fruit ajouté avec succès"
    });
});

//je vais créér une route expresseJS en PUT pour modifier un fruit

/*app.put('/api/fruit', (req, res) => {
    app.put: est une méthode ExpressJS utilisée pour modifier une ressource existante.
    /api/fruit: est le chemin de la route où la modification sera effectuée.
    (req, res) => { ... }: est une fonction de rappel (callback) qui sera exécutée lorsque cette route sera appelée. Elle prend deux paramètres :
    req: représente la requête entrante.
    res: représente la réponse que le serveur enverra au client.
});*/
/*res.status(200).json({
        message: "Fruit modifié avec succès"
    });
    res.status(200).json: est une méthode utilisée pour envoyer une réponse HTTP avec un code de statut 200 (OK) et un objet JSON contenant un message indiquant que le fruit a été modifié avec succès.
    */ 
app.put('/api/fruit', (req, res) => {
    res.status(200).json({
        message: "Fruit modifié avec succès"
    });
});
// j'exporte mon application expressJS pour pouvoir l'utiliser dans serveur.js

module.exports = app;