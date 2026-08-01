const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema ({
    title : {
        type : String,
        required : true,
    },
    description : String,
    image : {
        type :String,
        default : "C:\Users\harsi\Downloads\emily-irene-photo-co-94bKkPKVlQo-unsplash.jpg" ,
        set : (v) => v ==="" 
        ? "C:\Users\harsi\Downloads\emily-irene-photo-co-94bKkPKVlQo-unsplash.jpg" 
        : v,
    },
    price : Number,
    location : String,
    country : String,
});

const Listing = mongoose.model("Listing",listingSchema);
module.exports = Listing;