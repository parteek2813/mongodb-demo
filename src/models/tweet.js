const mongoose = require("mongoose");

const tweetSchema = new mongoose.Schema(
  {
    content: { type: String, required: true },
    userEmail: {
      type: String,
    },
    comments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment",
      },
    ],
  },
  { timestamps: true }
);

const Tweet = mongoose.model("Tweet", tweetSchema); // mongo auto names plural
module.exports = Tweet;
