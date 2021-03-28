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
  },
  date: {
    type: Date,
    default: Date.now
  },
  closingtime: {
    type: Date
  },
  closed: {
    type: Boolean,
    default: false
  }
})

const Poll = mongoose.model('polls', pollSchema)

module.exports = Poll
