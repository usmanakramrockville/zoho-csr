"use strict";

let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let TeamSchema = new Schema({

    name: {
        type: String,
        trim: true,
    },

    description: {
        type: String,
        trim: true
    },

    departmentId: {
		type: Schema.Types.ObjectId,
		ref: "Department"
    },

    subTeams: {
        type: Array,
    },

    roles: {
        type: Array,
    },

    rolesWithSubordinates:{
        type: Array
    },

    agents:{
        type: Array
    },

    derivedAgents:{
        type: Array
    }

}, {
        timestamps: true
    });

// Add index
TeamSchema.index({}, { unique: true });

module.exports = mongoose.model("Team", TeamSchema);
