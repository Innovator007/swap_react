const mongoose = require("mongoose");

const btcSchema = new mongoose.Schema({
	price: Number,
	quantity: Number,
	category: String,
	sum: Number
});

module.exports = mongoose.model("Btc", btcSchema);