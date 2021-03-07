const mongoose = require('mongoose')
const User = require('../models/users')

const noteSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        // required: true

    },
    title: {
        type: String,
        // required: true
    },
    content: {
        type: String
    },
    listItems: {
        type: [],
        default: []
    },
    img: {
        type: String
    },
    archive: {
        type: Boolean,
        default: false
    },
    pinned: {
        type: Boolean,
        default: false
    },
    reminders: {
        type: [],
        default: []
    },

    labels: {
        type: [],
        default: []
    }

})

const Notes = mongoose.model('Notes', noteSchema)
module.exports = Notes