let express = require('express');
let mongoose = require('mongoose');
let bodyParser = require('body-parser');

mongoose.connect(process.env.MONGODB_URI);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

const port = process.env.PORT || 300;

let app = express();

app.get('/api/alphabets',(req,res) => {
    res.send('im working');
});

app.post('/api/save',(req,res) => {
    let firstName;
    let lastName;
})

app.listen(port,() => {
    console.log('Server started on port ' + port);
});