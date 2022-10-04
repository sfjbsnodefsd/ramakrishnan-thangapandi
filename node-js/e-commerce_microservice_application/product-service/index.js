const express = require("express");
const app = express();
const PORT = process.env.PORT || 5001;
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const amqp = require("amqplib")
app.use(express.json());

mongoose.connect("mongodb://27017/product-service", {
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

app.listen(PORT, () => {
    console.log(`Product service is working at port ${PORT}`);
})