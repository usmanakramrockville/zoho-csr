"use strict";

let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let RoleSchema = new Schema({

    name: {
        type: String,
        trim: true,
    },

    description: {
        type: String,
        trim: true
    },

    isVisible: {
        type: Boolean,
    },
    isDefault: {
        type: Boolean,
    },

    shareDataWithPeers:{
        type: Boolean
    },

    reportsTo:{
        type: String
    },

    immediateSubRoles:{
        type: Array
    }

}, {
        timestamps: true
    });

// Add index
// RoleSchema.index({}, { unique: true });

module.exports = mongoose.model("Role", RoleSchema);
