let express = require('express');
let mongoose = require('mongoose');
let bodyParser = require('body-parser');

mongoose.connect('mongodb://sengathit.l@gmail.com:Slavanh77@ds137740.mlab.com:37740/lao-alphabets');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

const port = process.env.PORT || 300;

let app = express();

app.get('/api/alphabets',(req,res) => {
    let alphabets = mongoose.model('Alphabets',{})
    alphabets.find().then(collection => res.send(collection));
});

app.post('/api/save',(req,res) => {
    let firstName;
    let lastName;
})

app.listen(port,() => {
    console.log('Server started on port ' + port);
});