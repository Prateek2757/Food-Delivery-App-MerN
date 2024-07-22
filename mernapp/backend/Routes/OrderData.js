const express = require('express');
const router = express.Router();
const Order = require('../models/Order');

router.post('/orderData', async (req, res) => {
  try {
    let data = req.body.order_data;
    data.splice(0, 0, { order_date: req.body.order_date });

    let eId = await Order.findOne({ 'email': req.body.email });

    console.log(eId);
    if (eId === null) {
      await Order.create({
        email: req.body.email,
        order_data: [data]
      });
      res.status(200).json({ success: true });
    } else {
      await Order.findOneAndUpdate({ email: req.body.email }, { $push: { order_data: data } });
      res.status(200).json({ success: true });
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});

router.post('/myOrderData', async (req, res) => {
  try {
    let myData = await Order.findOne({ 'email': req.body.email });
    res.json({ orderData: myData });
    //console.log(myData);
  } catch (error) {
    res.send("server Error", error.message);
  }
});

module.exports = router;
