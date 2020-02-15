const Express = require("express")
const App = Express();
const port = 80;

const chalk = require('chalk');
const getPokemons = require('json-pokemon/getPokemon');

let pokemons = getPokemons();

App.use("/", Express.static("public"));

App.get("/id/:id", (req, res) => {

    let result = {"error": "Not found!"};

    pokemons.forEach((value) => {
        if(req.params.id == value.id) {
            result = value;
            console.log(chalk.green(__filename));
        }
        console.log(chalk.red(__filename));
    });

    res.json(result);
});

App.get("/name/:name", (req, res) => {
    let result = {"error": "Not found!"};

    pokemons.forEach((value) => {
        if(req.params.name == value.name) {
            result = value;
            console.log(chalk.green(__filename));
        }
        console.log(chalk.red(__filename));
    });

    res.json(result);
});

App.listen(port, () => {
    console.log("Server running!");   
});