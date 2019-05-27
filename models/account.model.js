"use strict";

let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let AccountSchema = new Schema({

    customFields: {
        contactCount: Number
    },

    accountName: {
        type: String,
        trim: true
    },

    email: {
        type: String,
        trim: true
    },

    website: {
        type: String,
        trim: true
    },

    fax: {
        type: String,
        trim: true
    },

    ownerId: {
        /*  Note: MongoDB generated Id requires type: Schema.Types.ObjectId
            type: String
        */
        type: Schema.Types.ObjectId,
    },

    firstName: {
        type: String
    },

    lastName: {
        type: String
    },

    associatedSLAIds: Array,


    industry: {
        type: String,
        trim: true
    },

    city: {
        type: String,
        trim: true
    },

    country: {
        type: String,
        trim: true
    },

    state: {
        type: String,
        trim: true
    },

    street: {
        type: String,
        trim: true
    },

    code: {
        type: String,
        trim: true
    },

    description: {
        type: String,
        trim: true
    },

    phone: {
        type: String,
        trim: true
    },

    annualrevenue: {
        type: Number
    },

    isTrashed: {
        type: Boolean
    },

    webUrl: {
        type: String,
        trim: true
    }

}, {
        timestamps: true
    });

// Add index
AccountSchema.index({accountName: 1});

module.exports = mongoose.model("Account", AccountSchema);
