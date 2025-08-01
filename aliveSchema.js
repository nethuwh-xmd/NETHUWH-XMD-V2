const mongoose = require('mongoose');

const aliveSchema = new mongoose.Schema({
  _id: { type: String, required: true }, // "aliveData"
  imgUrl: { type: String },
  videoUrl: { type: String }
});

module.exports = mongoose.model('AliveData', aliveSchema);
