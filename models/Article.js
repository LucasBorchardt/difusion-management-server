const mongoose = require('mongoose');
const { Schema, model } = mongoose;


const articleSchema = new Schema(
    {
        title: {
            type: String,
            required: true
        },
        location: {
            type: String,
            required: true
        },
        date: {
            type: Date
        },
        content: {
            type: String
        },
        externalURL: {
            type: String
        },
        imgURL: {
            type: String
        },
        videoURL: {
            type: String
        }
    },
);

module.exports = model("Article", articleSchema);


