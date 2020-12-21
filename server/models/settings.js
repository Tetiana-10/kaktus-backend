const mongoose = require('mongoose'),
 Schema = mongoose.Schema;

 const SettingsSchema = new Schema({
      temperature: String, // title of the book
      pressure: String, // name of the first author
      // releaseDate:String, // release date of the book
      // genre: String, //like fiction or non fiction
      // rating: String, // rating if you have read it out of 5
      // language: String // language in which the book is released
 });

 const SettingsModel = mongoose.model('settings', SettingsSchema);

 module.exports = SettingsModel;
