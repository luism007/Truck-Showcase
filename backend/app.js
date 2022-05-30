require('dotenv').config();
const express = require('express');
const cors = require('cors');
const vehicleRoutes =  require('./routes/vehicle-routes');
const app = express();
const port = 3000;


app.use(cors());

app.use('/api/', vehicleRoutes);

app.get('/', async (req, res) => {
    res.send('Hello World!');
});


app.listen(port, ()=> {
    console.log(`Example app listening on port ${port}`);
})