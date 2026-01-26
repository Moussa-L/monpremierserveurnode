// Ici , je crée mon application expressJS

// Importation du framework et de le stockée dans une constante (variable) nommée expressjs
const express = require('express');

//j'initialise mon application expressJS
const app = express();

app.use((req, res, next) => {
    console.log(" Je suis un middleware dans le serveur");//
    next();
})



app.use((req, res) => {
    res.json({message:"hiiiiiiiiii !"});
     //
    
});

//// je define la route par défaut

app.use((req, res) => {
    res.end("Bonjour, je suis votre application ExpressJS!");//
})

app.use((req,res,next) => {
    
});

// Je définis une route pour la racine de mon application
module.exports = app;