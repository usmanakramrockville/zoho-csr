"use strict";

let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let TicketTimerSchema = new Schema({

    hours: {
        type: Number
    },

    minutes: {
        type: Number
    },

    seconds: {
        type: Number
    },

    state: {
        type: Number
    },

}, {
        timestamps: true
    });

// Add index
TicketTimerSchema.index({}, { unique: true });
module.exports = mongoose.model("TicketTimer", TicketTimerSchema);
