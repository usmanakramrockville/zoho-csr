"use strict";

let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let LayoutSchema = new Schema({


    createdBy: {
        type: String,
        trim: true
    },

    modifiedBy: {
        type: String,
        trim: true
    },

    departmentId: {
        type: String,
        trim: true
    },

    isDefaultLayout: {
        type: Boolean
    },

    layoutName: {
        type: String,
        trim: true
    },

    sections: {
        id: String,
        isCustomSection: Boolean,
        name: String,
        fields: [{
            id: String,
            name: String,
            displayLabel: String,
            type: String,
            maxLength: Number,
            decimalPlaces: Number,
            roundingPrecision: Number,
            roundingOption: String,
            isSystemMandatory: Boolean,
            isRemovable: Boolean,
            isCustomField: Boolean,
            isEncryptedField: Boolean,
            isMandatory: Boolean,
            defaultValue: String,
            allowedValues: Array,
            restoreOnReplyValues: Array,
            sortBy: String
        }]
    }

}, {
        timestamps: true
    });

// Add index
LayoutSchema.index({}, { unique: true });

module.exports = mongoose.model("Layout", LayoutSchema);
