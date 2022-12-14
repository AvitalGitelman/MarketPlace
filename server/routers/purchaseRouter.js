const express = require('express')
const {Purchase} = require('../models/purchaseModel');

const router = express.Router()

const PURCHASE_ROUTER = '/purchase';

router.post('/', async (req, res) => {
    try {
        console.log(req.body)
        const newPurchase = {
            date: new Date(),
            totalPrice: req.body.totalPrice,
            itemsIds: req.body.itemsIds
        };
        await Purchase.create(newPurchase);
        res.status(201).end();
    } catch (e) {
        console.log(e);
        res.status(400).send(e);
    }
})

module.exports = {
    purchaseRouter: router,
    PURCHASE_ROUTER
}