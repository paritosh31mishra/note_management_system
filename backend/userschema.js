let mongoose = require("mongoose");
const notestructure =  new mongoose.Schema({
    title:   {type:String, required:true},
    content:  { type:String, required:true},
    date: {type:String, required:true}
});

module.exports = mongoose.model("notes", notestructure);