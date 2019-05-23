"use strict";

let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let QueueapiSchema = new Schema({

    subject: {
        type: String,
        trim: true,
    },

    departmentId: {
        type: String,
    },

    contactId : {
        type: String,
    },


    productId: {
        type: String,
    },

    uploads:{
        type: Array
    },

    email:{
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

    statusType:{
        type:String,
    },

    assigneeId:{
        type: String
    },

    category:{
        type: String
    },

    subCategory:{
        type: String
    },

    resolution:{
        type: String
    },

    dueDate: {
        type: Date.now()
    },

    priority: {
        type: String
    },

    channel: {
        type: String
    },

    classification:{
        type: String
    },

    customFields:{

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

    timeEntryCount: {
        type: Number
    },

    approvalCount: {
        type: Number
    },

    isDeleted:{
        type: Boolean
    },

    isTrashed:{
        type: Boolean
    },

    closedTime:{
        type: Date.now()
    },

    ticketNumber:{
        type: Number
    },

    customerResponseTime:{
        type: Date.now()
    },

    isRead:{
        type: Boolean
    },

    teamId:{
        type: String
    },

    isFollowing: {
        type: Boolean
    },

    department: {
        name : String,
        id : Number
    },

    team :{
        name : String,
        id : Number
    }
}, {
        timestamps: true
    });

// Add index
QueueapiSchema.index({}, { unique: true });

module.exports = mongoose.model("Queueapi", QueueapiSchema);
