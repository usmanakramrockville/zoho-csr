"use strict";

let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let TaskTimeEntrySchema = new Schema({


    ticketId: {
        type: String,
        trim: true
    },

    requestChargeType: {
        type: String,
        trim: true
    },

    ownerId: {
        type: String,
        trim: true
    },

    parent: {
        id: String,
        type: String,
        associatedTicketId : String
    },

    executedTime: {
        type: Date.now()
    },

    hoursSpent: {
        type: Number
    },

    minutesSpent: {
        type: Number
    },

    secondsSpent: {
        type: Number
    },

    agentCostPerHour: {
        type: Number
    },

    additionalCost: {
        type: Number
    },

    totalCost: {
        type: Number
    },

    description: {
        type: String,
        trim: true
    },

    customFields: Array,

    createdTime: {
        type: Date.now()
    },

    modifiedTime: {
        type: Date.now()
    },


    createdBy: {
        type: String,
        trim: true
    },

    modifiedBy: {
        type: String,
        trim: true
    },

    invoiceId: {
        type: String,
        trim: true
    },


}, {
        timestamps: true
    });

// Add index
TaskTimeEntrySchema.index({}, { unique: true });

module.exports = mongoose.model("TaskTimeEntry", TaskTimeEntrySchema);
