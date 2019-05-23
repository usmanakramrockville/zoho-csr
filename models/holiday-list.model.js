"use strict";

let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let HolidayListSchema = new Schema({


    name: {
        type: String,
        trim: true
    },

    status: {
        type: String,
        trim: true
    },

    holidays: [
        {
            holidayName: String,
            from: String,
            to: String
        }
    ],

    associatedBusinessHourIds: [{
        type: String,
        trim: true
    }]


}, {
        timestamps: true
    });

// Add index
HolidayListSchema.index({}, { unique: true });

module.exports = mongoose.model("HolidayList", HolidayListSchema);
