"use strict";

let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let EventSchema = new Schema({


    customFields: Array,
    departmentId:{
        type: String,
        trim: true
    },

    subject: {
        type: String,
        trim: true
    },

    startTime: {
        type: Date.now()
    },

    duration:{
        type: Number
    },

    status:{
        type: String,
        trim: true
    },

    ownerId :{
        type: String,
        trim: true
    },

    priority:{
        type: String,
        trim: true
    },

    description:{
        type: String,
        trim: true
    },

    creatorId: {
        type: String,
        trim: true
    },

    category: {
        type: String,
        trim: true
    },

    ticketId : {
        type: String,
        trim: true
    },

    contactId : {
        type: String,
        trim: true
    },

    ticket: {
        id: String,
        ticketNumber: Number,
        contact :{
            id: String,
            lastName: String,
            firstName: String
        }
    },

}, {
        timestamps: true
    });

// Add index
EventSchema.index({}, { unique: true });

module.exports = mongoose.model("Event", EventSchema);
