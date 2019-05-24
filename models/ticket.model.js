"use strict";

let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let TicketSchema = new Schema({

    subject: {
        type: String,
        trim: true,
    },
    departmentId: {
        /*  Note: MongoDB generated Id requires type: Schema.Types.ObjectId
            type: String
        */
        type: Schema.Types.ObjectId,
    },
    contactId: {
        /*  Note: MongoDB generated Id requires type: Schema.Types.ObjectId
            type: String
        */
        type: Schema.Types.ObjectId,
    },

    productId: {
        /*  Note: MongoDB generated Id requires type: Schema.Types.ObjectId
            type: String
        */
        type: Schema.Types.ObjectId,
    },

    uploads: {
        type: Array,
    },

    email: {
        type: String,
        trim: true
    },

    phone: {
        type: String,
        trim: true
    },

    description: {
        type: String,
        trim: true
    },

    status: {
        type: String,
        trim: true
    },

    statusType: {
        type: String,
        enum: ['OPEN', 'ON HOLD', 'CLOSED']
    },

    assigneeId: {
        /*  Note: MongoDB generated Id requires type: Schema.Types.ObjectId
           type: String
       */
        type: Schema.Types.ObjectId,
    },

    category: {
        type: String,
        trim: true
    },

    subCategory: {
        type: String,
        trim: true
    },

    resolution: {
        type: String,
        trim: true
    },

    dueDate: {
        type: Date
    },

    priority: {
        type: String,
    },

    channel: {
        type: String,
    },

    classification: {
        type: String,
        enum: ['Problem', 'Request', 'Question', 'Others']
    },

    customFields: {
        secondaryEmail: String,
        ModelName: String,
        severityPercentage: Number,
        phone: String,
        numberOfItems: Number,
        dateofPurchase: Date,
        permanentAddress: String,
        url: String
    },

    webUrl: {
        type: String
    },

    timeEntryCount: {
        type: Number
    },

    approvalCount: {
        type: Number
    },

    commentCount: {
        type: Number
    },

    attachmentCount: {
        type: Number
    },

    taskCount: {
        type: Number
    },

    threadCount: {
        type: Number
    },

    isDeleted: {
        type: Boolean
    },

    isTrashed: {
        type: Boolean
    },

    closedTime: {
        type: Date.now
    },

    ticketNumber: {
        type: Number
    },

    customerResponseTime: {
        type: Date.now
    },

    isRead: {
        type: Boolean
    },


    assignee: {
        firstName: String,
        lastName: String,
        photoURL: String,
        id: Schema.Types.ObjectId,
        email: String
    },

    teamId: {
        /*  Note: MongoDB generated Id requires type: Schema.Types.ObjectId
            type: String
        */
        type: Schema.Types.ObjectId,
    },

    isFollowing: {
        type: Boolean
    },

    department: {
        name: String,
        id: Schema.Types.ObjectId
    },

    team: {
        name: String,
        id: Schema.Types.ObjectId
    },

    channelRelatedInfo: {
        isTopicDeleted: Boolean,
        forumStatus: String,
        sourceLink: String,
        topicType: String
    }

}, {
        timestamps: true
    });

// Add index
TicketSchema.index({}, { unique: true });

module.exports = mongoose.model("Ticket", TicketSchema);
