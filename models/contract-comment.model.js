"use strict";

let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let ContractCommentSchema = new Schema({

    content: {
        type: String,
        trim: true
    },

    isPublic: {
        type: Boolean
    },

    commenterId: {
        type: String,
        trim: true
    },

    commenter: {
        name: String,
        email: String,
        type: String,
        photoURL: String
    },


    contentType: {
        type: String,
        trim: true
    }


}, {
        timestamps: true
    });

// Add index
ContractCommentSchema.index({}, { unique: true });

module.exports = mongoose.model("ContractComment", ContractCommentSchema);
