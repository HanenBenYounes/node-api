const mongoose = require('mongoose');
const PostsModel = mongoose.model(
    "node-api",
    {
        autor: {
            type: String,
            required : true
        },
        message: {
            type: String,
            required : true
        },
        date: {
            type: Date, 
            default : Date.now
        }
    },
    "posts"
);
module.exports = {PostsModel};