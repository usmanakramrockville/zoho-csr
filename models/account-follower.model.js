"use strict";

let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let AccountFollowerSchema = new Schema({

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
// AccountFollowerSchema.index({}, { unique: true });

module.exports = mongoose.model("AccountFollower", AccountFollowerSchema);
