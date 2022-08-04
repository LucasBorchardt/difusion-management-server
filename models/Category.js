const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const categorySchema = new Schema(
    {
        title: {
            type: String,
            required: true
        },
        description: {
            type: String
        }
    },
);

module.exports = model("Category", categorySchema);
