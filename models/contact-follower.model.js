"use strict";

let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let ContactFollowerSchema = new Schema({

    firstName: {
        type: String,
        trim: true
    },

    lastName: {
        type: String,
        trim: true
    },

    email: {
        type: String,
        trim: true
    },

    photoURL: {
        type: String,
        trim: true
    },

}, {
        timestamps: true
    });

// Add index
// ContactFollowerSchema.index({}, { unique: true });

module.exports = mongoose.model("ContactFollower", ContactFollowerSchema);
