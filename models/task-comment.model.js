"use strict";

let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let TaskCommentSchema = new Schema({

    content: {
        type: String,
        trim: true
    },

    isPublic: {
        type: Boolean
    },

    commenterId: {
        /*  Note: MongoDB generated Id requires type: Schema.Types.ObjectId
            type: String
        */
       type: Schema.Types.ObjectId, 
    },

    commenter: {
        name: String,
        email: String,
        type: String,
        photoURL: String
    },


    contentType: {
        type: String,
        enum: ['html', 'plainText'],
        default: 'html'
    }


}, {
        timestamps: true
    });

// Add index
// TaskCommentSchema.index({}, { unique: true });

module.exports = mongoose.model("TaskComment", TaskCommentSchema);
