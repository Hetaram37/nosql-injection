'use strict'

const User = require('../model/user')
const Joi = require('joi');

const schema = Joi.object({
    password: Joi.string().strict(),
    email: Joi.string().email().strict()
})

exports.loginV1 = async (req, res) => {
    try {
        const user = await User.findOne(
            { email: req.body.email, password: req.body.password}, {}
        )
        console.log('User details: %j', user);
        
        let isLoggedIn = false
        if (user) {
            isLoggedIn = true
        }
        res.json({ isLoggedIn })
    } catch (error) {
        console.error('Error while login: %j %s', error, error);
        res.status(500).json({ error: error.message, status: 'Fail', isLoggedIn: false })
    }
}

exports.loginV2 = async (req, res) => {
    console.log('Login body: %j', req.body);
    
    try {
        if (await validateLoginInput(req.body, res)) {
            
            const user = await User.findOne(
                { email: req.body.email, password: req.body.password}, {}
            )
            console.log('User details: %j', user);
            const isLoggedIn = false
            if (user) {
                isLoggedIn = true
            }
            res.json({ isLoggedIn })
        }
    } catch (error) {
        console.error('Error while login: %j %s', error, error);
        res.status(500).json({ error: error.message, status: 'Fail', isLoggedIn: false })
    }
}

async function validateLoginInput (body, res) {
    try {
        await schema.validateAsync(body)
        return true
    } catch (error) {
        console.log(error);
        throw error;
    }
}
