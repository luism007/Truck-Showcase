require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

const TruckSchema = new mongoose.Schema({
    manufacturer: String,
    name: String,
    trim: String,
    year: String
});

const Truck = mongoose.model("vehicles-collections", TruckSchema);

mongoose
.connect(process.env.MONGO_DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(async () => { 
    console.log('Connected to DB!'); 
})
.catch((e) => console.log(e));

app.get('/', async (req, res) => {
    res.send('Hello World!');
});

app.get('/trucks', async(req, res) => {
    const trucks = await Truck.find({});
    res.status(200).json(trucks);
})

app.listen(port, ()=> {
    console.log(`Example app listening on port ${port}`);
})