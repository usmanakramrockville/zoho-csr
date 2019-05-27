"use strict";

let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let AccountTimeEntrySchema = new Schema({

    ticketId: {
        /*  Note: MongoDB generated Id requires type: Schema.Types.ObjectId
            type: String,
        */
        type: Schema.Types.ObjectId,
    },

    requestChargeType: {
        type: String,
        trim: true
    },

    ownerId: {
        /*  Note: MongoDB generated Id requires type: Schema.Types.ObjectId
            type: String
        */
        type: Schema.Types.ObjectId,
    },

    parent: {
        id: String,
        type: String,
        associatedTicketId: String
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

    createdBy: {
        /*  Note: MongoDB generated Id requires type: Schema.Types.ObjectId
            type: String
        */
        type: Schema.Types.ObjectId
    },

    modifiedBy: {
        /*  Note: MongoDB generated Id requires type: Schema.Types.ObjectId
            type: String
        */
        type: Schema.Types.ObjectId
    },

    invoiceId: {
        /*  Note: MongoDB generated Id requires type: Schema.Types.ObjectId
            type: String
        */
        type: Schema.Types.ObjectId,
    },



}, {
        timestamps: true
    });

// Add index
// AccountTimeEntrySchema.index({}, { unique: true });

module.exports = mongoose.model("AccountTimeEntry", AccountTimeEntrySchema);
