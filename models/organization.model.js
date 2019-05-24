"use strict";

let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let OrganizationSchema = new Schema({

    companyName: {
        type: String,
        trim: true,
        required: true
    },
    portalName: {
        type: String,
        trim: true,
        lowercase: true,
        required: true
    },
    phoneNumber: {
        type: String,
        trim: true
    },
    edition: {
        type: String,
        enum:['FREE','ENTERPRISE','PROFESSIONAL'],
        trim: true,
        uppercase: true
    },
    isDefault: Boolean,
    isAdminInOrg: Boolean,
    portalURL: {
        type: String,
    },
    logoURL: {
        type: String,
    },
    alias: {
        type: String,
        trim: true
    },
    employeeCount: {
        type: String,
        trim: true
    },
    description: {
        type: String,
    },
    mobile: {
        type: String,
        trim: true
    },
    website: {
        type: String,
    },
    fax: {
        type: String,
        trim: true
    },
    primaryContact: {
        type: String,
        trim: true
    },
    street: {
        type: String,
        trim: true
    },
    city: {
        type: String,
        trim: true
    },
    state: {
        type: String,
        trim: true
    },
    zip: {
        type: String,
        trim: true
    },
    country: {
        type: String,
        trim: true
    },
    currencyLocale: {
        type: String,
        trim: true
    },
    currencySymbol: {
        type: String,
        trim: true
    }

}, {
        timestamps: true
    });

// Add index
OrganizationSchema.index({}, { unique: true });

module.exports = mongoose.model("Organization", OrganizationSchema);
