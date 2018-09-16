let express = require('express');
let mongoose = require('mongoose');
let mongoClient = require('mongodb').MongoClient;
let bodyParser = require('body-parser');

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

const port = process.env.PORT || 300;

app.get('/',(req,res) => {
    res.send('Home page');
})

app.get('/api/alphabets',(req,res) => {
    mongoClient.connect('mongodb://sengathit.l@gmail.com:Slavanh77@ds137740.mlab.com:37740/lao-alphabets',(err,client) => {
        if(err){
            res.status(400).send(err);
        }else{
            let collection = client.collection('alphabets');
            
            collection.find().then(docs => {
                res.send(docs);
            });
        }
    });
});

app.listen(port,() => {
    console.log('Server started on port ' + port);
});