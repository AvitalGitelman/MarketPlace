const express = require('express')
const {Item} = require('../models/itemModel');

const router = express.Router()

const ITEM_ROUTER = '/item';

router.get('/', async (req, res) => {
    try {
        const items = await Item.find().lean();
        res.send(items);
    } catch (e) {
        console.log(e)
        res.status(400).send(e);
    }
})

router.get('/:id', async (req, res) => {
    try {
        const item = await Item.find({_id: req.params.id}).lean();

        if (!item) return res.status(404).send("nope");

        res.send(item[0]);
    }catch (e) {
        res.status(400).send(e);
    }
})

module.exports = {
    itemRouter: router,
    ITEM_ROUTER
}