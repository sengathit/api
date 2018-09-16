let express = require('express');
const port = process.env.PORT || 3000;

let app = express();

app.get('/api/alphabets',(req,res) => {
    res.send('im working');
});

app.listen(port,() => {
    console.log('Server started on port ' + port);
});