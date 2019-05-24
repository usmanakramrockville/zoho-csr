"use strict";

let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let DepartmentSchema = new Schema({

    name: {
        type: String,
        trim: true,
    },

    nameInCustomerPortal: {
        type: String,
        trim: true
    },

    description: {
        type: String,
        trim: true
    },

    isVisibleInCustomerPortal: {
        type: Boolean
    },

    isEnabled: {
        type: Boolean
    },

    isAssignToDepartmentEnabled: {
        type: Boolean
    },

    hasLogo: {
        type: Boolean
    },

    creatorId: {
        /*  Note: MongoDB generated Id requires type: Schema.Types.ObjectId
            type: String
        */
        type: Schema.Types.ObjectId,
    },

    associatedAgentIds: [Schema.Types.ObjectId],

    isDefault: {
        type: Boolean
    },

    chatStatus: {
        type: String,
        enum : ['AVAILABLE','DISABLED','NOT_CREATED']
    }

}, {
        timestamps: true
    });

// Add index
DepartmentSchema.index({}, { unique: true });

module.exports = mongoose.model("Department", DepartmentSchema);
