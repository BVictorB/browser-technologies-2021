const 
  mongoose = require('mongoose'),
  Schema = mongoose.Schema

const savedPollSchema = new Schema({
  question: {
    type: String,
    required: true
  },
  answers: {
    type: Array,
    required: true
  },
  time: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  }
})

const SavedPoll = mongoose.model('savedpolls', savedPollSchema)

module.exports = SavedPoll
