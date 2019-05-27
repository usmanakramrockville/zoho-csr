"use strict";

let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let ThreadSchema = new Schema({

    hasAttach: {
        type: Boolean
    },
    summary: {
        type: String
    },
    attachments: [{
        size: Number,
        name: String,
        id: Schema.Types.ObjectId,
        href: String
    }],

    visibility: String,

    author: {
        photoURL: String,
        name: String,
        type: String,
        email: String
    },

    channel: {
        type: String,
        enum: ['FACEBOOK', 'TWITTER', 'EMAIL ', 'FORUMS']
    },

    
    actions: Array,
    
    content: String,
    
    contentType: {
        type: String,
        enum: ['html', 'plainText'],
        default: 'plainText'
    },

    status:  {
        type: String,
        enum: ['SUCCESS', 'PENDING', 'FAILED ', 'DRAFT']
    },

    direction: String,

    isForward: {
        type: Boolean
    },

    isPrivate: {
        type: Boolean
    },

    inReplyToThreadId: {
        /*  Note: MongoDB generated Id requires type: Schema.Types.ObjectId
            type: String
        */
        type: Schema.Types.ObjectId
    },

    fromEmailAddress: {
        type: String
    },

    to: {
        type: String
    },

    cc: {
        type: String
    },

    bcc: {
        type: String
    },

    phoneno: {
        type: String
    },

    isDescriptionThread: {
        type: Boolean
    }


}, {
        timestamps: true
    });

// Add index
// ThreadSchema.index({}, { unique: true });

module.exports = mongoose.model("Thread", ThreadSchema);
