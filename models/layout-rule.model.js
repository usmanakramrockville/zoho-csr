"use strict";

let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let LayoutRuleSchema = new Schema({

    name: {
        type: String,
        trim: true
    },

    description: {
        type: String,
        trim: true
    },

    fieldName: {
        type: String,
        trim: true
    },

    status: {
        type: String,
        trim: true
    },

    fieldConditions: [{
        id: Schema.Types.ObjectId,
        name: Boolean,
        pattern: String,
        conditions: {
            fieldName: String,
            value: Array,
            displayValue: Array,
            condition: String,
        },
        actions:{
            showFields: Array,
            showSections: Array,
            setMandatoryFields: Array,
        }
    }]

}, {
        timestamps: true
    });

// Add index
// LayoutRuleSchema.index({}, { unique: true });

module.exports = mongoose.model("LayoutRule", LayoutRuleSchema);
