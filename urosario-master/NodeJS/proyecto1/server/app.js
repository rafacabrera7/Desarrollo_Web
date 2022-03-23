const { log } = require('console');
const express = require('express')
const bodyParser = require("body-parser");

const app = express()
const { MongoClient } = require('mongodb');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var url = "mongodb://localhost:27017/game_moole_db";

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');

    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.get('/', function (req, res) {
  res.send('El servidor esta corriendo..')
})

app.get('/score', async function (req, res) {
    const client = new MongoClient(url);
    await client.connect();
    const collection = client.db().collection('score');

    const findResult = await collection.find({}).toArray();
    res.send(findResult);
     
})
 
app.post('/score', async function (req, res) {
    const client = new MongoClient(url);
    await client.connect();
    const collection = client.db().collection('score');

    let data = {
        score: req.body.score,
        nickname: req.body.nickname,
        nivel: req.body.nivel
    }

    const insertResult = await collection.insertOne(data);
    
    if (insertResult) {
        res.send({status: "ok"});
    } else {
        res.send({status: "error"});
    }
    
})


MongoClient.connect(url, function(err, db) {

 if (err) throw err;

 console.log("Hay conexión!");
 
 app.listen(3000);

 db.close();

});


