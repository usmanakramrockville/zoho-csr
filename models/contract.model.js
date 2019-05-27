"use strict";

let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let ContractSchema = new Schema({


    associatedSLAId: {
        /*  Note: MongoDB generated Id requires type: Schema.Types.ObjectId
            type: String
        */
        type: Schema.Types.ObjectId,
    },

    accountId: {
        /*  Note: MongoDB generated Id requires type: Schema.Types.ObjectId
            type: String
        */
        type: Schema.Types.ObjectId,
    },

    departmentId: {
        /*  Note: MongoDB generated Id requires type: Schema.Types.ObjectId
            type: String
        */
        type: Schema.Types.ObjectId,

    },

    productId: {
        /*  Note: MongoDB generated Id requires type: Schema.Types.ObjectId
            type: String
        */
        type: Schema.Types.ObjectId,
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
        /*  Note: MongoDB generated Id requires type: Schema.Types.ObjectId
            type: String
        */
        type: Schema.Types.ObjectId,
    },

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
ContractSchema.index({contractName: 1});

module.exports = mongoose.model("Contract", ContractSchema);
