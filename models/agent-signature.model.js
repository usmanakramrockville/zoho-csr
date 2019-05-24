"use strict";

let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let AgentSignatureSchema = new Schema({


    agentId: {
        /*  Note: MongoDB generated Id requires type: Schema.Types.ObjectId
            type: String
        */
        type: Schema.Types.ObjectId,
    },

    defaultSignature: {
        type: String,
        trim: true
    },

    isActive: {
        type: Boolean
    },

        /*  Note: MongoDB generated Id requires type: Schema.Types.ObjectId
            type: String
        */
       type: Schema.Types.ObjectId,


    customizedSignatures: [{
        departmentId: Schema.Types.ObjectId,
        signature: String
    }]

}, {
        timestamps: true
    });

// Add index
AgentSignatureSchema.index({}, { unique: true });

module.exports = mongoose.model("AgentSignature", AgentSignatureSchema);
