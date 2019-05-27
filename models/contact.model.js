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

    owner: {
        id: Schema.Types.ObjectId,
        firstName: String,
        lastName: String
    },

    customerHappiness: {
        badPercentage: Number,
        okPercentage: Number,
        goodPercentage: Number
    },

    zohoCRMContact: {
        id: Schema.Types.ObjectId,
        type: String
    },


}, {
        timestamps: true
    });

// Add index
ContactSchema.index({firstName: 1});

module.exports = mongoose.model("Contact", ContactSchema);
