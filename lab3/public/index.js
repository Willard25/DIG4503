const Express = require("express");
const App = Express();
const port = 80;

App.use(Express.static("public"));

App.get('/', function(request, response) {
    response.send("Hello World!")
});

App.listen(port, function(){

})