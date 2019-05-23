"use strict";

let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let ThreadSchema = new Schema({

    hasAttach : {
        type: Boolean
    },
    summary : {
        type: String
    },
    attachments : [ {
      size : Number,
      name : String,
      id : Number ,
      href : String
    } ],

    visibility : String,

    author : {
      photoURL : String,
      name : String,
      type : String,
      email : String
    },

    channel : String,
    
    createdTime : Date.now(),
    actions : Array,
    content : String,
    contentType: {
        type: String
    },
    status : String,
    direction : String,

    isForward: {
        type: Boolean
    },

    isPrivate: {
        type: Boolean
    },

    inReplyToThreadId:{
        type: String
    },

    fromEmailAddress :{
        type: String
    },

    to: {
        type: String
    },

    cc: {
        type: String
    },

    bcc:{
        type: String
    },

    phoneno: {
        type: String
    },

    isDescriptionThread:{
        type: Boolean
    }


}, {
        timestamps: true
    });

// Add index
ThreadSchema.index({}, { unique: true });

module.exports = mongoose.model("Thread", ThreadSchema);
