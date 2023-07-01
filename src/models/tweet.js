const mongoose = require("mongoose");

const tweetSchema = new mongoose.Schema(
  {
    content: { type: String, required: true },
    userEmail: {
      type: String,
    },
  },
  { timestamps: true }
);

const Tweet = mongoose.model("Tweet", tweetSchema); // mongo auto names plural
module.exports = Tweet;
