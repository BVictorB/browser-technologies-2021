const 
  mongoose = require('mongoose'),
  Schema = mongoose.Schema

const pollSchema = new Schema({
  question: {
    type: String,
    required: true
  },
  answers: {
    type: Array,
    required: true
  },
  subscriptions: {
    type: Array
  }
})

const Poll = mongoose.model('polls', pollSchema)

module.exports = Poll
