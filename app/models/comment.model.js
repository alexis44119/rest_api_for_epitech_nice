const mongoose = require("mongoose");

const comment_schema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    post: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post"
    }
});

module.exports = mongoose.model("Comment", comment_schema);