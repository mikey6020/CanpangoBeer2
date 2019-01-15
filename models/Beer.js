const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BeerSchema = new Schema({
    name:{
        type:String
    },
    ibu:{
        type:Number
    },
    calories:{
        type:Number
    },
    abv:{
        type:Number
    },
    style:{
        type:String
    },
    brewery_location:{
        type:String
    },
    created_on:{
        type:Date,
        default:Date.now()
    },
    category:{
        type:String
    }
});

module.exports = Beer = mongoose.model('beer', BeerSchema);
