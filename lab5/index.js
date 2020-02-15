const Express = require("express")
const App = Express();
const port = 80;

const chalk = require('chalk');
const getPokemons = require('json-pokemon/getPokemon');

const pokemons = getPokemons();
let pokeId = getPokemons.getPokemonById();
let pokeName = getPokemons.getPokemonByName();

App.use("/", Express.static("public"));

//console.log(pokeId);
//console.log(pokeName);

App.get("/id/:id", (req, res) => {

    //let pokeId = getPokemons.getPokemonById(req.params.id);

    if (pokeId == req.params.id) {
        res.send(req.params.id);
        console.log(chalk.green(__filename));
    };
    res.send("Error ID does not exist!");
    console.log(chalk.red(__filename));
});

App.get("/name/:name", (req, res) => {
    if (pokeName == req.params.name) {
        res.send(req.params.name);
        console.log(chalk.green(__filename));
    };
    res.send("Error Name does not exist!");
    console.log(chalk.red(__filename));
});

App.listen(port, () => {
    console.log("Server running!");   
});