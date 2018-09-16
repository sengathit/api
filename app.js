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
    mongoClient.connect('mongodb://sengathit:Slavanh77@ds137740.mlab.com:37740/lao-alphabets',(err,db) => {
        if(err){
            res.send(err)
        }else{
            db.collection('alphabets').find().then(doc => {
                res.send(docs);
            });
        }
    });
});

app.listen(port,() => {
    console.log('Server started on port ' + port);
});