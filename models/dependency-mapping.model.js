"use strict";

let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let DependencyMappingSchema = new Schema({


    layoutId: {
        /*  Note: MongoDB generated Id requires type: Schema.Types.ObjectId
            type: String
        */
        type: Schema.Types.ObjectId,
    },
    parentId: {
        /*  Note: MongoDB generated Id requires type: Schema.Types.ObjectId
            type: String
        */
        type: Schema.Types.ObjectId,
    },

    childId: {
        /*  Note: MongoDB generated Id requires type: Schema.Types.ObjectId
            type: String
        */
        type: Schema.Types.ObjectId,
    },

    mappings: Array

}, {
        timestamps: true
    });

// Add index
// DependencyMappingSchema.index({}, { unique: true });

module.exports = mongoose.model("DependencyMapping", DependencyMappingSchema);
