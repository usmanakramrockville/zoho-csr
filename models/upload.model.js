"use strict";

let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let UploadSchema = new Schema({

    creatorId:{
        type: String,
        trim: true
    },

    name:{
        type: String,
        trim: true
    },

    isPublic:{
        type: Boolean
    },

    size:{
        type: Number
    }

}, {
        timestamps: true
    });

// Add index
UploadSchema.index({}, { unique: true });

module.exports = mongoose.model("Upload", UploadSchema);
