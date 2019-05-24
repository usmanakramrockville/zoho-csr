"use strict";

let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let TaskTimerSchema = new Schema({
    
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
        type: Number,
        enum: ['RUNNING', 'PAUSED', 'INIT']
    },

}, {
        timestamps: true
    });

// Add index
TaskTimerSchema.index({}, { unique: true });

module.exports = mongoose.model("TaskTimer", TaskTimerSchema);
