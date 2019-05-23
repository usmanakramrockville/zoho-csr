"use strict";

let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let CallSchema = new Schema({


    customFields:Array,

    departmentId:{
        type: String,
        trim: true
    },

    subject:{
        type: String,
        trim: true
    },

    startTime:{
        type:Date.now()
    },

    direction:{
        type:String,
        trim: true
    },

    duration: {
        type: Number
    },

    status: {
        type: String
    },

    ownerId: {
        type: String,
        trim: true
    },

    priority: {
        type: String,
        trim: true
    },

    description: {
        type: String,
        trim: true
    },

    creatorId : {
        type: String,
        trim: true
    },

    ticketId :{
        type: String,
        trim: true
    },

    contactId: {
        type: String,
        trim: true
    },

    ticket: {
        id: String,
        ticketNumber: Number,
        contact: {
            id: String,
            lastName: String,
            firstName: String
        }
    }


}, {
        timestamps: true
    });

// Add index
CallSchema.index({}, { unique: true });

module.exports = mongoose.model("Call", CallSchema);
