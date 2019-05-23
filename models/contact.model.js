"use strict";

let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let ContactSchema = new Schema({

    customFields: {
        permanentAddress: String,
        lastContactedOn: String
    },

    lastName: {
        type: String,
        trim: true
    },

    firstName: {
        type: String,
        trim: true
    },

    facebook: {
        type: String,
        trim: true
    },

    twitter: {
        type: String,
        trim: true
    },

    email: {
        type: String,
        trim: true
    },

    phone: {
        type: String,
        trim: true
    },

    mobile: {
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

    zip: {
        type: String,
        trim: true
    },

    description: {
        type: String,
        trim: true
    },

    title: {
        type: String,
        trim: true
    },

    type: {
        type: String,
        trim: true
    },

    ownerId: {
        type: String,
        trim: true
    },

    accountId: {
        type: String,
        trim: true
    },


    isDeleted: {
        type: Boolean
    },

    isTrashed: {
        type: Boolean
    },

    photoURL: {
        type: String,
        trim: true
    },

    webUrl: {
        type: String,
        trim: true
    },

    createdTime: {
        type: Date.now(),

    },

    modifiedTime: {
        type: Date.now(),
    },

    owner: {
        id: String,
        firstName: String,
        lastName: String
    },

    customerHappiness: {
        badPercentage: Number,
        okPercentage: Number,
        goodPercentage: Number
    },

    zohoCRMContact: {
        id: String,
        type: String
    },


}, {
        timestamps: true
    });

// Add index
ContactSchema.index({}, { unique: true });

module.exports = mongoose.model("Contact", ContactSchema);
