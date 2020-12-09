const express = require('express')
const databaseModule = require("./databaseModule");
const ThingModel=  require("./ThingModel");
const app = express()
const port = 3000

app.use(express.static(__dirname + '\\staticFiles\\'))
app.use(express.json())
app.use(express.urlencoded())

app.post('/test', function (req, res) {
ThingModel.saveThing(req.body.kanelbulle)
    console.log(req.body.kanelbulle);

    res.sendStatus(418)
})

app.listen(port, () => console.log(`Example app listening on port port!`))