const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/farmAI");

const historySchema = new mongoose.Schema({
question:String,
response:String,
type:String,
timestamp:Date
});

module.exports = mongoose.model("History", historySchema);