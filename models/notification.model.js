"use strict";

let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let NotificationSchema = new Schema({

    departmentId: {
        type: String,
        trim: true
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
        type: String,
        trim: true
    },
    
    subject: {
        type: String,
        trim: true
    },
    
    threadId: {
        type: String,
        trim: true
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
        id: String,
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
