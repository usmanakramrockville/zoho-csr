"use strict";

let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let ArticleSchema = new Schema({

    attachments: [{
        reseourceId: Schema.Types.ObjectId,
        name: String,
        viewUrl: String,
        downloadUrl: String,
        createdTime: Date.now(),
        filesize: Number
    }],

    reviewedTime: {
        type: String
    },

    departmentId: {
        /*  Note: MongoDB generated Id requires type: Schema.Types.ObjectId
            type: String
        */
        type: Schema.Types.ObjectId,
    },

    modifierId: {
        /*  Note: MongoDB generated Id requires type: Schema.Types.ObjectId
            type: String
        */
        type: Schema.Types.ObjectId,
    },
    creatorId: {
        /*  Note: MongoDB generated Id requires type: Schema.Types.ObjectId
            type: String
        */
        type: Schema.Types.ObjectId,
    },

    title: {
        type: String,

    },

    expiryDate: {
        type: Date
    },

    public: {
        type: Boolean
    },

    modifiedBy: {
        photoURL: {
            type: String,
            trim: true
        },
        name: String,
        id: Schema.Types.ObjectId
    },

    seo: {
        keywords: String,
        description: String,
        title: String
    },

    summary: {
        type: String
    },

    latestVersionStatus: {
        type: String
    },
    author: {
        photoURL: String,
        name: String,
        id: Schema.Types.ObjectId
    },
    permission: {
        type: String
    },
    reviewedBy: {
        type: String
    },
    authorId: {
        /*  Note: MongoDB generated Id requires type: Schema.Types.ObjectId
            type: String
        */
        type: Schema.Types.ObjectId,
    },

    tags: Array,
    commentCount: {
        type: Number
    },

    answer: {
        type: String,
        trim: true
    },
    latestVersion: {
        type: Number,
    },
    createdBy: {
        photoURL: String,
        name: String,
        id: Schema.Types.ObjectId
    },
    portalUrl: {
        type: String,
        trim: true
    },

    latestPublishedVersion: {
        type: String,
        trim: true
    },

    attachmentCount: {
        type: Number,
    },

    position: {
        type: Number,
    },

    metrics: {
        feedbackCount: Number,
        unlikeCount: Number,
        lastUsageTime: Date,
        likeCount: Number,
        viewCount: Number,
        lastActivityTime: Date,
        usageCount: Number
    },

    permalink: {
        type: String,
        trim: Boolean
    },
    category: {
        name: String,
        id: Schema.Types.ObjectId
    },

    categoryId: {
        /*  Note: MongoDB generated Id requires type: Schema.Types.ObjectId
            type: String
        */
        type: Schema.Types.ObjectId,
    },

    status: {
        type: String,
        trim: true
    }

}, {
        timestamps: true
    });

// Add index
ArticleSchema.index({}, { unique: true });

module.exports = mongoose.model("Article", ArticleSchema);
