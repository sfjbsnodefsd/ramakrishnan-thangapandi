const mongoose = require("mongoose")
const schema = mongoose.Schema;

const ProductSchema = new mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    created_dt: {
        type: Date,
        default: Date.now
    }
});
module.exports = User = mongoose.model("product", ProductSchema);