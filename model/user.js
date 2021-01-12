'use strict'

const mongoose = require('mongoose')
mongoose.set('debug', true)

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, 'Email is required']
    },
    password: {
        type: String,
        required: [true, 'Password is required']
    }
}, {
    timestamps: {
        createdAt: 'created_on',
        updatedAt: 'updated_on'
    },
    collection: 'user'
})

module.exports = mongoose.model('user', userSchema)
