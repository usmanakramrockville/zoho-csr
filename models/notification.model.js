"use strict";

let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let NotificationSchema = new Schema({

    departmentId: {
        /*  Note: MongoDB generated Id requires type: Schema.Types.ObjectId
            type: String
        */
        type: Schema.Types.ObjectId,
    },

    departmentName: {
        type: String,
        trim: true
    },

    channel: {
        type: String,
        trim: true
    },

    ticketNumber: {
        type: String,
        trim: true
    },

    ticketId: {
        /*  Note: MongoDB generated Id requires type: Schema.Types.ObjectId
            type: String
        */
        type: Schema.Types.ObjectId,
    },

    subject: {
        type: String,
        trim: true
    },

    threadId: {
        /*  Note: MongoDB generated Id requires type: Schema.Types.ObjectId
            type: String
        */
        type: Schema.Types.ObjectId,
    },

    errorMessage: {
        type: String,
        trim: true
    },

    reason: {
        type: String,
        trim: true
    },

    assignee: {
        id: Schema.Types.ObjectId,
        firstName: String,
        lastName: String,
        email: String,
        photoURL: String,
    }


}, {
        timestamps: true
    });

// Add index
NotificationSchema.index({}, { unique: true });

module.exports = mongoose.model("Notification", NotificationSchema);
