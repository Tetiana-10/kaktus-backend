const mongoose = require("mongoose");
mongoose.connect( process.env.MONGODB_URI ||
    "mongodb://localhost:27017/settingsData",{ useNewUrlParser: true });

console.log(process.env.MONGODB_URI);
module.exports.settings = require("./settings.js");
