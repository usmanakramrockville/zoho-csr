"use strict";

let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let AgentSignatureSchema = new Schema({


    agentId: {
        type: String,
        trim: true
    },

    defaultSignature: {
        type: String,
        trim: true
    },

    isActive: {
        type: Boolean
    },

    customizedSignatures: [{
        departmentId: String,
        signature: String
    }]


}, {
        timestamps: true
    });

// Add index
AgentSignatureSchema.index({}, { unique: true });

module.exports = mongoose.model("AgentSignature", AgentSignatureSchema);
