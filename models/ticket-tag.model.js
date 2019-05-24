"use strict";

let mongoose = require("mongoose");
let Schema = mongoose.Schema;



let TicketTagSchema = new Schema({
    
    // No attributes available in API docs for this endpoint

}, {
        timestamps: true
    });

// Add index
TicketTagSchema.index({}, { unique: true });

module.exports = mongoose.model("TicketTag", TicketTagSchema);
