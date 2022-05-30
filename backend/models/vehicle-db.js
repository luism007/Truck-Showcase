const mongoose = require('mongoose');
mongoose
.connect(process.env.MONGO_DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(async () => { 
    console.log('Connected to DB!'); 
})
.catch((e) => console.log(e));

const TruckSchema = new mongoose.Schema({
    manufacturer: String,
    name: String,
    trim: String,
    year: String
});

module.exports = {
    TruckSchema
};