"use strict";

let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let TicketFollowerSchema = new Schema({

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

    following:{
        type: String,
        enum: ['tickets', 'contacts', 'accounts']
    }


}, {
        timestamps: true
    });

// Add index
// TicketFollowerSchema.index({}, { unique: true });
module.exports = mongoose.model("TicketFollower", TicketFollowerSchema);
