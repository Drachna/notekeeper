const mongoose = require('mongoose')
const User = require('../models/users')

const noteSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true

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
    
    archive: {
        type: Boolean,
        default: false
    },
    color: {
        type: String,
        default: 'white'
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