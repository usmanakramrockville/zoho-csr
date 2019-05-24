"use strict";

let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let TaskSchema = new Schema({

    customFields: Array,

    departmentId: {
        /*  Note: MongoDB generated Id requires type: Schema.Types.ObjectId
            type: String
        */
        type: Schema.Types.ObjectId
    },

    subject: {
        type: String,
        trim: true
    },

    ticketId: {
        /*  Note: MongoDB generated Id requires type: Schema.Types.ObjectId
            type: String
        */
        type: Schema.Types.ObjectId
    },

    dueDate: {
        type: Date,

    },

    ownerId: {
        /*  Note: MongoDB generated Id requires type: Schema.Types.ObjectId
            type: String
        */
        type: Schema.Types.ObjectId
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

    creatorId: {
        /*  Note: MongoDB generated Id requires type: Schema.Types.ObjectId
            type: String
        */
        type: Schema.Types.ObjectId
    },

    ticketId: {
        /*  Note: MongoDB generated Id requires type: Schema.Types.ObjectId
            type: String
        */
        type: Schema.Types.ObjectId
    },

    webUrl: {
        type: String,
        trim: true
    },

    assignee: {
        id: Schema.Types.ObjectId,
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
