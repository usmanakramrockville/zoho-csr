"use strict";

let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let ProductSchema = new Schema({

    departmentIds: [
        { type: String }
    ],

    ownerId: {
        type: String
    },

    productName: {
        type: String,
        trim: true
    },

    productCode: {
        type: String,
        trim: true
    },


    productCategory: {
        type: String,
        trim: true
    },

    manufacturer: {
        type: String,
        trim: true
    },


    unitPrice: {
        type: Number
    },

    customFields: Array,

    createdBy: {
        type: String
    },

    modifiedBy: {
        type: String
    },

    createdTime: {
        type: Date.now(),

    },

    modifiedTime: {
        type: Date.now(),
    },


    description: {
        type: String
    }

}, {
        timestamps: true
    });

// Add index
ProductSchema.index({}, { unique: true });

module.exports = mongoose.model("Product", ProductSchema);
