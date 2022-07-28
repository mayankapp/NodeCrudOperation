const mongoose = require('mongoose');
const express = require('express');
const userModel = require('../models/User');

const router = express.Router();

router.get('/', async(req, res) => {
    try {
        const users = await userModel.find().exec();
        res.status(200).send(users);
    } catch (error) {
        console.log(error);
    }
});

// Create the User
router.post("/create-user", async (req, res) => {
    try {
        const user = await userModel.create(req.body);
        return res.status(201).send(user)
    } catch (error) {
        console.log(error)
    }
});

// Update the User data
router.patch("/update-user/:id", async (req, res) => {
    try {
        const id = req.params.id
        const data = req.body;
        const updateData = await userModel.findByIdAndUpdate(id, data);
        console.log(updateData);
        res.status(200).send(updateData);
    } catch (error) {
        console.log(error);
    }
});

// Delete the user
router.delete("/delete-user/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const result = await userModel.findByIdAndDelete(id);
        res.status(200).send(result);
    } catch (error) {
        console.log(error);
    }
});

module.exports = router;