"use strict";

let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let ArticleSchema = new Schema({


    modifiedTime: {
        type: Date.now(),

    },
    attachments: [{
        reseourceId: String,
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
        type: String,
        trim: true
    },

    modifierId: {
        type: String,
        trim: true
    },
    creatorId: {
        type: String,
        trim: true
    },

    title: {
        type: String,

    },
    expiryDate: {
        type: Date.now()
    },

    public: {
        type: Boolean
    },
    createdTime: {
        type: Date.now()
    },
    modifiedBy: {
        photoURL: {
            type: String,
            trim: true
        },
        name: String,
        id: String
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
        id: String
    },
    permission: {
        type: String
    },
    reviewedBy: {
        type: String
    },
    authorId: {
        type: String,
        trim: true
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
        id: String
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
        lastUsageTime: Date.now(),
        likeCount: Number,
        viewCount: Number,
        lastActivityTime: Date.now(),
        usageCount: Number
    },

    permalink: {
        type: String,
        trim: Boolean
    },
    category: {
        name: String,
        id: String
    },

    categoryId: {
        type: String,
        trim: true
    },
    status: {
        type: String,
        trim: true
    },

    createdTime: {
        type: Date.now(),

    },

    modifiedTime: {
        type: Date.now(),
    }

}, {
        timestamps: true
    });

// Add index
ArticleSchema.index({}, { unique: true });

module.exports = mongoose.model("Article", ArticleSchema);
