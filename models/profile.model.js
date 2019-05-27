"use strict";

let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let ProfileSchema = new Schema({

    name: {
        type: String,
        trim: true,
    },

    description: {
        type: String,
        trim: true
    },

    isVisible: {
        type: Boolean,
    },

    type: {
        type: String,
        enum:['Administrator','Standard','Light', 'Portal', 'Custom']
    },

    default: {
        type: Boolean,
    },

    permissions: {
        crmInteg: {
            crmContactsActivityEvents: Boolean,
            crmAccountsActivityEvents: Boolean,
            crmAccountsActivityTasks: Boolean,
            crmAccountsInfo: Boolean,
            crmContactsActivityCalls: Boolean,
            crmAccountsNotes: Boolean,
            crmAccountsActivityCalls: Boolean,
            crmContactsInfo: Boolean,
            crmContactsNotes: Boolean,
            crmContactsActivityTasks: Boolean,
            crmAccountsPotentials: Boolean,
            crmContactsPotentials: Boolean
        },
        reports: {
            view: Boolean,
            edit: Boolean,
            create: Boolean,
            delete: Boolean,
            export: Boolean
        },
        tickets: {
            mergeTickets: Boolean,
            changeOwner: Boolean,
            import: Boolean,
            handleUnassigned: Boolean,
            edit: Boolean,
            closeTicket: Boolean,
            mailReview: Boolean,
            delete: Boolean,
            view: Boolean,
            create: Boolean,
            addFollowers: Boolean,
            export: Boolean,
            mailSend: Boolean,
            unassignedChangeOwner: Boolean,
            shareTickets: Boolean
        },
        comments: {
            edit: Boolean,
            delete: Boolean
        },
        social: {
            view: Boolean
        },
        contracts: {
            view: Boolean,
            import: Boolean,
            edit: Boolean,
            create: Boolean,
            delete: Boolean,
            export: Boolean
        },
        community: {
            view: Boolean
        },
        products: {
            view: Boolean,
            import: Boolean,
            edit: Boolean,
            create: Boolean,
            delete: Boolean,
            export: Boolean
        },
        kbCategory: {
            view: Boolean,
            import: Boolean,
            edit: Boolean,
            create: Boolean,
            delete: Boolean,
            export: Boolean
        },
        setup: {
            timeTracking: Boolean,
            fetchAcrossDepartment: Boolean,
            globalReports: Boolean,
            exportPortalUsers: Boolean,
            layouts: Boolean,
            userAndGroups: Boolean,
            automation: Boolean,
            featureConfig: Boolean,
            customerHappiness: Boolean,
            department: Boolean,
            portal: Boolean,
            webForm: Boolean,
            rebranding: Boolean,
            email: Boolean,
            tabsAndFields: Boolean,
            exportUsers: Boolean,
            social: Boolean,
            templates: Boolean,
            moveRecords: Boolean,
            permission: Boolean,
            signUpApproval: Boolean,
            community: Boolean,
            importHistory: Boolean,
            portalUsers: Boolean,
            managerDashboard: Boolean,
            chat: Boolean,
            telephony: Boolean
        },
        accounts: {
            view: Boolean,
            import: Boolean,
            edit: Boolean,
            create: Boolean,
            delete: Boolean,
            export: Boolean
        },
        timeEntry: {
            view: Boolean,
            edit: Boolean,
            create: Boolean,
            delete: Boolean
        },
        contacts: {
            view: Boolean,
            import: Boolean,
            edit: Boolean,
            create: Boolean,
            delete: Boolean,
            export: Boolean
        },
        tasks: {
            view: Boolean,
            import: Boolean,
            edit: Boolean,
            create: Boolean,
            delete: Boolean,
            export: Boolean
        }

    },

}, {
        timestamps: true
    });

// Add index
ProfileSchema.index({name: 1});

module.exports = mongoose.model("Profile", ProfileSchema);
