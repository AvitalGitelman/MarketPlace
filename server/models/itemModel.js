const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    name: String,
    price: Number,
    picture: String,
    pagePicture: String,
    description: String,
    shop: String
});

const Item = mongoose.model('Item', itemSchema);

module.exports = {
    Item
}