const mongoose = require("mongoose");
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
        categories: {
            type: Schema.Types.ObjectId, 
            ref: 'Category',
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

const Article = model("Article", articleSchema);
module.exports = Article;



