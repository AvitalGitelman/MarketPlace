const mongoose = require('mongoose');

const purchaseSchema = new mongoose.Schema({
    date: Date,
    totalPrice: Number,
    itemsIds: [String],
});

const Purchase = mongoose.model('purchase', purchaseSchema);

module.exports = {
    Purchase
}