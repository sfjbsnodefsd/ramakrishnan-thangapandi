const express = require("express");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 5001;
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const amqp = require("amqplib");
const product = require("./product");
const isAuthenticated = require("../isAuthenticated");
app.use(express.json());
var channel, connection, order;

mongoose.connect("mongodb://localhost:27017/product-service", {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, () => {
  console.log(`Product service DB connected!`)
});


async function connect() {
  const amqpServer = "amqp://localhost:5672"
  connection = await amqp.connect(amqpServer);
  channel = await connection.createChannel();
  await channel.assertQueue("PRODUCT")
}
connect();

// create a new product
// buy a new product
app.post("/product/create", isAuthenticated, async (req, res) => {
  const { name, description, price } = req.body;
  const newProduct = new product({
    name, description, price
  });
  newProduct.save();
  return res.json(newProduct);
});

app.post("/product/buy", isAuthenticated, async (req, res) => {

  const { ids } = req.body;
  const products = await product.find({ _id: { $in: ids } });

  channel.sendToQueue(
    "ORDER",
    Buffer.from(
      JSON.stringify({
        products,
        userEmail: req.user.email,
      })
    )
  );
  channel.consume("PRODUCT", data => {
    console.log("consuming product queue");
    order = JSON.parse(data.content);
    channel.ack(data);
  })
  return res.json(order);
});

app.listen(PORT, () => {
  console.log(`Product service is working at port ${PORT}`);
})