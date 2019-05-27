"use strict";

let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let ProductSchema = new Schema({

    departmentIds: [ Schema.Types.ObjectId ],

    ownerId: {
        /*  Note: MongoDB generated Id requires type: Schema.Types.ObjectId
            type: String
        */
       type: Schema.Types.ObjectId,
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
        /*  Note: MongoDB generated Id requires type: Schema.Types.ObjectId
            type: String
        */
       type: Schema.Types.ObjectId,
    },

    modifiedBy: {
        /*  Note: MongoDB generated Id requires type: Schema.Types.ObjectId
            type: String
        */
       type: Schema.Types.ObjectId,
    },

    description: {
        type: String
    }

}, {
        timestamps: true
    });

// Add index
ProductSchema.index({productName: 1});

module.exports = mongoose.model("Product", ProductSchema);
