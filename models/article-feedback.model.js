"use strict";

let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let ArticleFeedbackSchema = new Schema({

    ticket: {
        ticketNumber: Number,
        webUrl: String,
        id: Schema.Types.ObjectId,
        deletedTime: Date.now(),
        deletedBy: {
            photoURL: String,
            name: String,
            id: Schema.Types.ObjectId
        }
    },
    contactId: {
        /*  Note: MongoDB generated Id requires type: Schema.Types.ObjectId
            type: String
        */
       type: Schema.Types.ObjectId,
    },
    contact: {
        photoURL: String,
        name: String,
        id: String
    },


    ticketId: {
        /*  Note: MongoDB generated Id requires type: Schema.Types.ObjectId
            type: String
        */
        type: Schema.Types.ObjectId,
    },
    content: {
        type: String,
        trim: true
    },
    article: {
        webUrl: String,
        id: Schema.Types.ObjectId,
        title: String
    }


}, {
        timestamps: true
    });

// Add index
// ArticleFeedbackSchema.index({}, { unique: true });

module.exports = mongoose.model("ArticleFeedback", ArticleFeedbackSchema);
