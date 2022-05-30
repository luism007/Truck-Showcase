require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const vehicleRoutes =  require('./routes/vehicle-routes');
const app = express();
const port = 3000;


app.use(cors());
// parse various different custom JSON types as JSON
app.use(bodyParser.urlencoded({
    extended: true
}));
// parse application/json
app.use(bodyParser.json())

app.use('/api/', vehicleRoutes);

app.get('/', async (req, res) => {
    res.send('Hello World!');
});


app.listen(port, ()=> {
    console.log(`Example app listening on port ${port}`);
})