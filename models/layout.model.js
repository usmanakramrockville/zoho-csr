"use strict";

let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let LayoutSchema = new Schema({


    createdBy: {
        /*  Note: MongoDB generated Id requires type: Schema.Types.ObjectId
            type: String
        */
       type: Schema.Types.ObjectId
    },

    modifiedBy: {
        /*  Note: MongoDB generated Id requires type: Schema.Types.ObjectId
            type: String
        */
       type: Schema.Types.ObjectId
    },

    departmentId: {
        /*  Note: MongoDB generated Id requires type: Schema.Types.ObjectId
            type: String
        */
       type: Schema.Types.ObjectId
    },

    isDefaultLayout: {
        type: Boolean
    },

    layoutName: {
        type: String,
        trim: true
    },

    sections: {
        id: Schema.Types.ObjectId,
        isCustomSection: Boolean,
        name: String,
        fields: [{
            id: Schema.Types.ObjectId,
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
LayoutSchema.index({layoutName: 1});

module.exports = mongoose.model("Layout", LayoutSchema);
