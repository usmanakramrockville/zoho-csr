"use strict";

let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let TicketTagSchema = new Schema({
    
    
}, {
        timestamps: true
    });

// Add index
TicketTagSchema.index({}, { unique: true });

module.exports = mongoose.model("TicketTag", TicketTagSchema);
