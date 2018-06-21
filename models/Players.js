const mongoose = require('mongoose');


const tableSchema = new mongoose.Schema({
  FirstName: {
    type: String,
    required: 'Doh! You forgot to put the Name of the player',
  },
  LastName: {
    type: String,
    required: 'Doh! You forgot to put the last name of the player',
  },
  Team: {
    type: String,
    required: 'Doh! You forgot to put team name',
  },
  Jersey: {
    type: Number,
  },
  URL: {
    type: String,
  },
});

tableSchema.pre('save', function (next) {

});


module.exports = mongoose.model('Players', tableSchema);
