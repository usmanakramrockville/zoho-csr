"use strict";

let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let BusinessHourSchema = new Schema({


    name: {
        type: String,
        trim: true
    },

    status: {
        type: String,
        trim: true
    },

    type: {
        type: String,
        trim: true
    },

    holidayListId: {
        type: String,
        trim: true
    },

    timeZoneId: {
        type: String,
        trim: true
    },

    businessTimes: [{
        day: String,
        startTime: String,
        endTime: String
    }]


}, {
        timestamps: true
    });

// Add index
BusinessHourSchema.index({}, { unique: true });

module.exports = mongoose.model("BusinessHour", BusinessHourSchema);
