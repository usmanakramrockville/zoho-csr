"use strict";

let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let ProductAttachmentSchema = new Schema({

    creatorId: {
        /*  Note: MongoDB generated Id requires type: Schema.Types.ObjectId
            type: String
        */
        type: Schema.Types.ObjectId,
    },

    name: {
        type: String,
        trim: true
    },

    isPublic: {
        type: Boolean
    },

    size: {
        type: Number
    }


}, {
        timestamps: true
    });

// Add index
ProductAttachmentSchema.index({}, { unique: true });

module.exports = mongoose.model("ProductAttachment", ProductAttachmentSchema);
