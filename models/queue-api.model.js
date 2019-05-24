"use strict";

let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let QueueApiSchema = new Schema({

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

    contactId : {
        /*  Note: MongoDB generated Id requires type: Schema.Types.ObjectId
            type: String
        */
        type: Schema.Types.ObjectId
    },


    productId: {
        /*  Note: MongoDB generated Id requires type: Schema.Types.ObjectId
            type: String
        */
        type: Schema.Types.ObjectId
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
        enum: ['OPEN', 'ON HOLD', 'CLOSED']
    },

    assigneeId:{
        /*  Note: MongoDB generated Id requires type: Schema.Types.ObjectId
            type: String
        */
       type: Schema.Types.ObjectId
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
        type: Date
    },

    priority: {
        type: String
    },

    channel: {
        type: String
    },

    classification:{
        type: String,
        enum: ['Problem', 'Request', 'Question', 'Others']
    },

    customFields:{

    },

    webUrl: {
        type: String
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
        type: Date
    },

    ticketNumber:{
        type: Number
    },

    customerResponseTime:{
        type: Date.now
    },

    isRead:{
        type: Boolean
    },

    teamId:{
        /*  Note: MongoDB generated Id requires type: Schema.Types.ObjectId
            type: String
        */
       type: Schema.Types.ObjectId
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
QueueApiSchema.index({}, { unique: true });

module.exports = mongoose.model("QueueApi", QueueApiSchema);
