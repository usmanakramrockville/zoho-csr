"use strict";

let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let DependencyMappingSchema = new Schema({

   
    layoutId: {
        type: String,
        trim: true
    },
    parentId: {
        type: String,
        trim: true
    },

    childId: {
        type: String,
        trim: true
    },

    mappings:Array

}, {
        timestamps: true
    });

// Add index
DependencyMappingSchema.index({}, { unique: true });

module.exports = mongoose.model("DependencyMapping", DependencyMappingSchema);
