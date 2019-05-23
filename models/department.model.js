"use strict";

let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let TeamSchema = new Schema({

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

    isVisibleInCustomerPortal:{
        type: Boolean
    },

    isEnabled:{
        type: Boolean
    },

    isAssignToTeamEnabled:{
        type: Boolean
    },

    hasLogo: {
        type: Boolean
    },

    creatorId: {
        type: String
    },

    associatedAgentIds: {
        type: Array
    },

    isDefault: {
        type: Boolean
    },

    chatStatus: {
       type: String
    }

}, {
        timestamps: true
    });

// Add index
TeamSchema.index({}, { unique: true });

module.exports = mongoose.model("Team", TeamSchema);
