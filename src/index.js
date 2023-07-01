const express = require("express");
const connect = require("./config/database");

const app = express();
const Tweet = require("./models/tweet");

const PORT = 3000;

app.listen(PORT, async () => {
  console.log(`Server is running on port ${PORT}`);
  await connect();
  console.log("Mongo db connected");
  const tweet = await Tweet.create({
    content: "Third tweet",
    // userEmail: "user@example.com",
  });
  console.log(tweet);
});
