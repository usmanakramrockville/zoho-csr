"use strict";

let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let TicketApprovalSchema = new Schema({

    approverIds: Array,

    subject: {
        type: String,
        trim: true
    },

    status: {
        type: String,
        trim: true
    },

    description: {
        type: String,
        trim: true
    },

    requestedTime: {
        type: Date.now()
    },
    processedTime: {
        type: Date.now()
    },

    requester: {
        id: String,
        firstName: String,
        lastName: String,
        email: String,
        photoURL: String,
    },

    approver: {
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
TicketApprovalSchema.index({}, { unique: true });

module.exports = mongoose.model("TicketApproval", TicketApprovalSchema);
