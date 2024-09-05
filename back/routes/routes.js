const express = require('express');
const User = require('../models/model');

const router = express.Router();

//Post Method
router.post('/post', async (req, res) => {
  console.log(req?.body?.userName);
  const currentUserName = req?.body?.userName?.trim().toLowerCase();
  const user = new User({
    userName: currentUserName,
    email: req?.body?.email,
    firstName: req?.body?.firstName,
    lastName: req?.body?.lastName,
    phone: req?.body?.phone,
    gender: req?.body?.gender,
  });
  try {
    const isUserNamePresent = await User.findOne({ userName: currentUserName });
    if (!!isUserNamePresent) {
      res.status(400).json({ message: 'User Already exist' });
    }
    if (!isUserNamePresent) {
      const userToSave = await user.save();
      res.status(200).json(userToSave);
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//Get all Method
router.get('/getAll', async (req, res) => {
  console.log('data');
  try {
    const data = await User.find().select('userName email firstName phone');
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Get by ID Method
router.get('/getOne/:id', async (req, res) => {
  try {
    const data = await User.findById(req.params.id);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Update by ID Method
router.put('/update/:id', async (req, res) => {
  try {
    console.log(req.params.id, 'dataaaaaaaaaaa');
    const id = req.params.id;
    const updatedData = req.body;

    const result = await User.findByIdAndUpdate(id, updatedData);

    res.send(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//Delete by ID Method
router.delete('/delete/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const data = await User.findByIdAndDelete(id);
    res.send(`Document with ${data.name} has been deleted..`);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
