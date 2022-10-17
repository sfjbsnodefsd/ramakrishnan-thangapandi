const express = require("express");
const app = express();

app.get("/test", (req, res) => {
    res.send("hey how are you doing ?...")
})

app.get("/test/subjects", (req, res) => {
    res.send(['maths', "science", "IT"]);
})
function add(a, b) {
    return a + b;
}

module.exports = { app, add };
app.listen(8082, () => {
    console.log("listening to port 8082");
});