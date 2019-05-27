"use strict";

let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let TicketApprovalSchema = new Schema({

    approverIds: [Schema.Types.ObjectId],

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
        type: Date.now
    },
    processedTime: {
        type: Date.now
    },

    requester: {
        id: Schema.Types.ObjectId,
        firstName: String,
        lastName: String,
        email: String,
        photoURL: String,
    },

    approver: {
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
// TicketApprovalSchema.index({}, { unique: true });

module.exports = mongoose.model("TicketApproval", TicketApprovalSchema);
