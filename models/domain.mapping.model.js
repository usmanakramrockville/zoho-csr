"use strict";

let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let DomainMappingSchema = new Schema({


    domain: {
        type: String,
        trim: true
    },

    isVerified: {
        type: Boolean
    },

    isApplied: {
        type: Boolean
    },

    zdSecurityCode: {
        type: String,
        trim: true
    },

    verifiedTime: {
        type: Date.now()
    },

    appliedTime: {
        type: Date.now()
    },

    verifiedBy: {
        type: String,
        trim: true
    },
    appliedBy: {
        type: String,
        trim: true
    },

}, {
        timestamps: true
    });

// Add index
DomainMappingSchema.index({}, { unique: true });

module.exports = mongoose.model("DomainMapping", DomainMappingSchema);
