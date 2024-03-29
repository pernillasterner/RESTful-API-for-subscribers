// Create a module to interact with the database
const mongoose = require("mongoose");

// Create a schema
const subscriberSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  subscribedToChannel: {
    type: String,
    required: true,
  },
  subscribeDate: {
    type: String,
    required: true,
    default: Date.now,
  },
});

// Model is a function that will allow interacting directly with the database using the schema
module.exports = mongoose.model("Subscriber", subscriberSchema);
