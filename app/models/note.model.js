const mongoose = require('mongoose');

const NoteSchema = mongoose.Schema({
    title: String,
    content: String,
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Comment",
            required: "Comment is Required"
        }
    ]
}, {
    timestamps: true
});

module.exports = mongoose.model('Note', NoteSchema);