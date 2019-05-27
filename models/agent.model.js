"use strict";

let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let AgentSchema = new Schema({

    emailId: {
        type: String,
        trim: true,
        required: true
    },
    status: {
        type: String,
        trim: true,
        uppercase: true
    },
    lastName: {
        type: String,
        trime: true
    },
    firstName: {
        type: String,
        trime: true
    },
    phone: {
        type: String,
        trime: true
    },
    mobile: {
        type: String,
        trime: true
    },
    extn: {
        type: String,
        trime: true
    },
    associatedDepartmentIds: {
        type: Array
    },
    associatedChatDepartmentIds: {
        type: Array
    },
    zuid: {
        type: String,
        trim: true
    },
    roleId: {
        type: Number
    },
    profileId: {
        type: Number
    },
    photoURL: {
        type: String
    },
    isConfirmed: {
        type: Boolean
    },
    aboutInfo: {
        type: String,
        trim: true
    },
    channelExpert: {
        type: Array
    },
    countryCode: {
        type: String,
    },
    timeZone: {
        type: String,
        trim: true
    },
    langCode: {
        type: String
    }

}, {
        timestamps: true
    });

// Add index
AgentSchema.index({emailId: 1}, {unique: true});

module.exports = mongoose.model("Agent", AgentSchema);
