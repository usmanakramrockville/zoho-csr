"use strict";

let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let ContractSchema = new Schema({


    associatedSLAId: {
        type: String
    },

    accountId: {
        type: String,
        trim: true
    },

    departmentId: {
        type: String,
        trim: true

    },

    productId: {
        type: String,
        trim: true
    },


    contractNumber: {
        type: String,
        trim: true
    },


    notificationAgentIds: Array,

    notifyBefore: {
        type: Number
    },

    notifyOn: {
        type: Date,
    },

    startDate: {
        type: Date,
    },

    endDate: {
        type: Date,
    },

    ownerId: {
        type: String,
        trim: true
    },

    createdBy: {
        type: String,
        trim: true

    },

    modifiedBy: {
        type: String,
        trim: true

    },

    createdTime: {
        type: Date.now(),

    },

    modifiedTime: {
        type: Date.now(),
    },

    contractName: {
        type: String,
        trim: true

    },

    description: {
        type: String,
        trim: true

    },

    customFields: Array


}, {
        timestamps: true
    });

// Add index
ContractSchema.index({}, { unique: true });

module.exports = mongoose.model("Contract", ContractSchema);
