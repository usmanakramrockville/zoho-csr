"use strict";

let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let ArticleFeedbackSchema = new Schema({

    ticket: {
        ticketNumber: Number,
        webUrl: String,
        id: String,
        deletedTime: Date.now(),
        deletedBy: {
            photoURL: String,
            name: String,
            id: String
        }
    },
    contactId: {
        type: String
    },
    contact: {
        photoURL: String,
        name: String,
        id: String
    },


    ticketId: {
        type: String,
        trim: true
    },
    content: {
        type: String,
        trim: true
    },
    article: {
        webUrl: String,
        id: String,
        title: String
    },

    createdTime: {
        type: Date.now(),

    },

    modifiedTime: {
        type: Date.now(),

    },


}, {
        timestamps: true
    });

// Add index
ArticleFeedbackSchema.index({}, { unique: true });

module.exports = mongoose.model("ArticleFeedback", ArticleFeedbackSchema);
