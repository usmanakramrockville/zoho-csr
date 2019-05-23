"use strict";

let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let BlueprintSchema = new Schema({


    name: {
        type: String,
        trim: true
    },

    description: {
        type: String,
        trim: true
    },

    active: {
        type: Boolean
    },

    module: {
        type: String,
        trim: true
    },

    departmentId: {
        type: String,
        trim: true
    },

    layoutId: {
        type: String,
        trim: true
    },

    type: {
        type: String,
        trim: true
    },

    fieldId: {
        type: String,
        trim: true
    },

    criteria: [{
        fieldConditions: [{
            fieldName: String,
            value: Array,
            condition: String,
            fieldModule: String
        }],
        pattern: String,

    }],

    chartData: {
        canvasPosition: {
            top: Number,
            left: Number
        },
        connectionDetails: [
            {
                fromUuid: String,
                toUuid: String,
                isCommTrans: Boolean,
                usedStates: Array,
                isAuto: Boolean,
                transName: String
            }
        ],
        stateDetails: [
            {
                stateName: String,
                slaTime: String,
                position: {
                    top: Number,
                    left: Number
                }

            }
        ]
    }


}, {
        timestamps: true
    });

// Add index
BlueprintSchema.index({}, { unique: true });

module.exports = mongoose.model("Blueprint", BlueprintSchema);
