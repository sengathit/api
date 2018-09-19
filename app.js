let express = require('express');
let mongoose = require('mongoose');
let mongoClient = require('mongodb').MongoClient;
let bodyParser = require('body-parser');

let app = express();

const port = process.env.PORT || 3000;
var db;

mongoose.connect('mongodb://sengathit:Slavanh77@ds137740.mlab.com:37740/lao-alphabets');

let MyModel = mongoose.model('Alphabets',{ name : String});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/',(req,res) => {
    console.log(db)
    res.send('Home page');
});

app.get('/api/alphabets',(req,res) => {
    MyModel.find().then(docs => {
        res.send(docs)
    })
})

app.listen(port,() => {
    console.log('Server started on port ' + port);
});
