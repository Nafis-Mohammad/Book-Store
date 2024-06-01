const mongoose = require("mongoose")

const BookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        // unique: true,
    },

    author: {
        type: String,
        required: true,
    },

    description: {
        type: String,
        required: true,
    },

    genre: {
        type: String,
        required: true,
    },

    publishYear: {
        type: Number,
        required: true,
    },
}, {timestamps: true})

module.exports = mongoose.model("Book", BookSchema)