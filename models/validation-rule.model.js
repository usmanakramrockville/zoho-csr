"use strict";

let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let ValidationRuleSchema = new Schema({


    fieldName: {
        type: String,
        trim: true
    },
    status: {
        type: String,
        enum: ['ACTIVE', 'DISABLED'],
    },

    fieldConditions: [
        {
            name: String,
            pattern: String,
            conditions: [{
                fieldName: String,
                value: [],
                displayValue: [],
                condition: String
            }],
            actions: [{
                type: String
            }]
        }
    ]


}, {
        timestamps: true
    });

// Add index
// ValidationRuleSchema.index({}, { unique: true });

module.exports = mongoose.model("ValidationRule", ValidationRuleSchema);
