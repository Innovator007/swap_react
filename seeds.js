const mongoose = require("mongoose");
const Btc = require("./models/btc");
const faker = require("faker");

var data = [
    {
    	price: faker.random.number(),
    	quantity: faker.random.number({
    		precision: 0.00001
    	}),
    	category: "selling",
    	sum: faker.random.number({
    		precision: 0.00001
    	})
    },
    {
    	price: faker.random.number(),
    	quantity: faker.random.number({
    		precision: 0.00001
    	}),
    	category: "selling",
    	sum: faker.random.number({
    		precision: 0.00001
    	})
    },
    {
    	price: faker.random.number(),
    	quantity: faker.random.number({
    		precision: 0.00001
    	}),
    	category: "selling",
    	sum: faker.random.number({
    		precision: 0.00001
    	})
    },
    {
    	price: faker.random.number(),
    	quantity: faker.random.number({
    		precision: 0.00001
    	}),
    	category: "selling",
    	sum: faker.random.number({
    		precision: 0.00001
    	})
    },
    {
    	price: faker.random.number(),
    	quantity: faker.random.number({
    		precision: 0.00001
    	}),
    	category: "buying",
    	sum: faker.random.number({
    		precision: 0.00001
    	})
    },
    {
    	price: faker.random.number(),
    	quantity: faker.random.number({
    		precision: 0.00001
    	}),
    	category: "buying",
    	sum: faker.random.number({
    		precision: 0.00001
    	})
    }
]

function seedDB(){
   //Remove all campgrounds
   Btc.remove({}, function(err){
        if(err){
            console.log(err);
        }
        console.log("removed data!");
         //add a few campgrounds
        data.forEach(function(seed){
            Btc.create(seed, function(err, campground){
                if(err){
                    console.log(err)
                } else {
                    console.log("added data");
                }
            });
        });
    }); 
}

module.exports = seedDB;