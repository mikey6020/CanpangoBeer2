const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CategorySchema = new Schema({
    url:{
        type:String
    },
    name:{
        type:String
    }
});

module.exports = Category = mongoose.model('category', BeerSchema);
