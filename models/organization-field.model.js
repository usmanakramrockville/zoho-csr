"use strict";

let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let OrganizationFieldSchema = new Schema({

    displayLabel: {
        type: String,
        trim: true
    },

    type: {
        type: String,
        trim: true
    },

    maxLength: {
        type: Number
    },

    decimalPlaces: {
        type: Number
    },
    roundingPrecision: {
        type: Number
    },

    roundingOption: {
        type: String,
        trim: true
    },
    defaultValue: {
        type: String,
        trim: true
    },
    allowedValues: Array

}, {
        timestamps: true
    });

// Add index
// OrganizationFieldSchema.index({}, { unique: true });

module.exports = mongoose.model("OrganizationField", OrganizationFieldSchema);
