const mongoose = require('mongoose');

async function connectToMongo() {
    try {
        await mongoose.connect('mongodb://localhost:27017/test');
        console.log("connected to mongodb!!!");
    } catch (e) {
        console.log(e);
    }
  
}

module.exports = {
    connectToMongo
}