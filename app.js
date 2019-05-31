const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
var cors = require('cors');
const seedDB = require("./seeds");

const Btc = require("./models/btc");

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(cors());

mongoose.Promise = global.Promise;

const databaseUri = process.env.MONGODB_URI || 'mongodb://localhost/swap_task';

mongoose.connect(databaseUri)
      .then(() => console.log(`Database connected`))
      .catch(err => console.log(`Database connection error: ${err.message}`));

//seedDB();

app.get("/",(req,res) => {
	res.json({ info: "Swapping Task" });
});

app.get("/api/btc", (req,res) => {
	Btc.find({}, (err, data) => {
		if(err) {
			return err;
		}
		res.json(data);
	})
})

app.get("/api/btc/:category", (req,res) => {
	Btc.find({ category: req.params.category }, (err, data) => {
		if(err) {
			return err;
		}
		res.json(data);
	});
});

const port = 5000;
app.listen(port, () => {
	console.log("Server is running on port " + port);
})