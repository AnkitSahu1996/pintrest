const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users of Pinterest"
  },
  title: String,
  description: String,
  image: String,
});

module.exports = mongoose.model("posts of Pinterest", postSchema);