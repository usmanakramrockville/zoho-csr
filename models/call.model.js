"use strict";

let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let CallSchema = new Schema({


    customFields: Array,

    departmentId: {
        /*  Note: MongoDB generated Id requires type: Schema.Types.ObjectId
            type: String
        */
        type: Schema.Types.ObjectId,
    },

    subject: {
        type: String,
        trim: true
    },

    startTime: {
        type: Date.now()
    },

    direction: {
        type: String,
        trim: true
    },

    duration: {
        type: Number
    },

    status: {
        type: String
    },

    ownerId: {
        /*  Note: MongoDB generated Id requires type: Schema.Types.ObjectId
            type: String
        */
        type: Schema.Types.ObjectId,
    },

    priority: {
        type: String,
        trim: true
    },

    description: {
        type: String,
        trim: true
    },

    creatorId: {
        /*  Note: MongoDB generated Id requires type: Schema.Types.ObjectId
            type: String
        */
        type: Schema.Types.ObjectId,
    },

    ticketId: {
        /*  Note: MongoDB generated Id requires type: Schema.Types.ObjectId
            type: String
         */
        type: Schema.Types.ObjectId,
    },

    contactId: {
        /*  Note: MongoDB generated Id requires type: Schema.Types.ObjectId
            type: String
        */
        type: Schema.Types.ObjectId,
    },

    ticket: {
        id: Schema.Types.ObjectId,
        ticketNumber: Number,
        contact: {
            id: Schema.Types.ObjectId,
            lastName: String,
            firstName: String
        }
    }


}, {
        timestamps: true
    });

// Add index
CallSchema.index({}, { unique: true });

module.exports = mongoose.model("Call", CallSchema);
