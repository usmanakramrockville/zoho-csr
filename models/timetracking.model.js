"use strict";

let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let TimetrackingSchema = new Schema({

    isTimeTracking: {
        type: Boolean
    },

    depId: {
        /*  Note: MongoDB generated Id requires type: Schema.Types.ObjectId
            type: String
        */
        type: Schema.Types.ObjectId,
    },

    isBillable: {
        type: Boolean
    },

    billingType: {
        type: String,
        enum: ['FIXED_COST_FOR_TICKETS' , 'FIXED_COST_FOR_AGENTS' , 'SPECIFIC_COST_PER_AGENT' , 'SPECIFIC_COST_PER_PROFILE']
    },

    fixedCost: {
        type: Number
    },

    agents: [{
        id: Schema.Types.ObjectId,
        cost: Number
    }],

    profiles: [{
        id: Schema.Types.ObjectId,
        cost: Number
    }],

    timerAction: {
        type: String,
        enum: ['ADD', 'DISCARD']
    },

    activityPreference: [{
        trackMode: String,
        isTasksEnabled: Boolean,
        isEventsEnabled: Boolean,
        canAutoTrackCalls: Boolean
    }],

    ticketPreference: [{
        isAutoTimer: Boolean,
        isAutoPause: Boolean,
        isHideTimeTracking: Boolean,
        isReviewTime: Boolean,
        autoTrackAction: [
            {
                sendReply: Boolean,
                manualDraft: Boolean,
                commentActions: Boolean,
                resolutionActions: Boolean,
                fieldUpdate: Boolean,
                onChatComplete: Boolean,
                attachmentActions: Boolean,
                approvalActions: Boolean,
            }
        ]
    }]

}, {
        timestamps: true
    });

// Add index
TimetrackingSchema.index({}, { unique: true });

module.exports = mongoose.model("Timetracking", TimetrackingSchema);
