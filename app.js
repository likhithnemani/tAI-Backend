var express = require('express');
var bodyParser = require('body-parser');
var ip = require('ip');

const app = express();

const PORT = 5000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.get('/', (req,res) => {
    res.send('tAI Backend');
})

const ip_address = ip.address();
app.listen(PORT,() => console.log(`Server running on  http://${ip_address}:${PORT}`));