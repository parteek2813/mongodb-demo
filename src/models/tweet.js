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

// defining a virtual here.
tweetSchema.virtual("contentWithEmail").get(function process() {
  return this.content + "\n" + "Created By: " + this.userEmail;
});

const Tweet = mongoose.model("Tweet", tweetSchema); // mongo auto names plural
module.exports = Tweet;
