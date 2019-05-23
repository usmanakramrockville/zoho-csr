"use strict";

let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let TaskSchema = new Schema({

    customFields: {

    },

    departmentId: {
        type: String
    },

    subject: {
        type: String,
        trim: true
    },

    ticketId: {
        type: String
    },

    dueDate: {
        type: Date.now(),

    },

    ownerId: {
        type: String
    },

    category: {
        type: String
    },

    status: {
        type: String
    },

    priority: {
        type: String
    },

    description: {
        type: String
    },


    createdTime: {
        type: Date.now(),

    },

    modifiedTime: {
        type: Date.now(),
    },


    creatorId: {
        type: String
    },

    ticketId: {
        type: String
    },

    webUrl: {
        type: String,
        trim: true
    },

    assignee: {
        id: String,
        firstName: String,
        lastName: String,
        email: String,
        photoURL: String
    }


}, {
        timestamps: true
    });

// Add index
TaskSchema.index({}, { unique: true });

module.exports = mongoose.model("Task", TaskSchema);
