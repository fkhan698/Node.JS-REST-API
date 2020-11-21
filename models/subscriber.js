const mongoose = require('mongoose')

const subscriberSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
      type: String,
      required: true
  },
  phoneNumber: {
      type: Number,
      required: false
  },
  subscribedToChannel: {
    type: String,
    required: true
  },

  subscribeDate: {
    type: Date,
    required: true,
    default: Date.now
  }
})

module.exports = mongoose.model('Subscriber', subscriberSchema)