"use strict";

let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let TicketSchema = new Schema({

    subject: {
        type: String,
        trim: true,
    },
    departmentId: {
        type: String,
    },
    contactId: {
        type: String,
    },

    productId: {
        type: String,
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
        trim: true
    },

    assigneeId: {
        type: String
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
        type: Date.now()
    },

    priority: {
        type: String,
    },

    channel: {
        type: String,
    },

    classification: {
        type: String,
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

    createdTime: {
        type: Date.now()
    },

    modifiedTime: {
        type: Date.now()
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
        type: Date.now()
    },

    ticketNumber: {
        type: Number
    },

    customerResponseTime: {
        type: Date.now()
    },

    isRead: {
        type: Boolean
    },


    assignee: {
        firstName: String,
        lastName: String,
        photoURL: String,
        id: Number,
        email: String
    },

    teamId: {
        type: String
    },

    isFollowing: {
        type: Boolean
    },

    department: {
        name: String,
        id: String
    },

    team: {
        name: String,
        id: String
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
