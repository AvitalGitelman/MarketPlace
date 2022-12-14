const express = require('express');
const {connectToMongo} = require('./mongo.js');
const cors = require('cors');
const bodyParser = require('body-parser')

const {ITEM_ROUTER, itemRouter} = require('./routers/itemRouter.js');
const {PURCHASE_ROUTER, purchaseRouter} = require('./routers/purchaseRouter');

const app = express();
const port = 4000;

app.listen(port, async () => {
    console.log(`items server listening on port ${port}`);
    await connectToMongo();
    console.log("server is ready!")
});

app.use(cors());
app.use(bodyParser.json())

app.use(ITEM_ROUTER, itemRouter);
app.use(PURCHASE_ROUTER, purchaseRouter);