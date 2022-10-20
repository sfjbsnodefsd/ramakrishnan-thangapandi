console.log("producer");
const Kafka = require("node-rdkafka");

const stream = Kafka.createWriteStream(
    {
        "metadata.broker.list": "localhost:9092",
    },
    {},
    { topic: "test" }
);
function queueMessage() {
    const result = stream.write(Buffer.from("This is rama"))
    console.log(result);
}
setInterval(() => {
    queueMessage();
}, 3000)