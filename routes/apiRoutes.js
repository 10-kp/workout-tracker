const router = require('express').Router();
const Workout = require('../models/workout.js');
const path = require('path');
require('mongoose');

//Create new workouts
router.post('/api/workouts', (req, res) => {
  Workout.create({})
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log('error', err);
      res.status(400).json(err);
    });
});

//Add an exercise
router.put('/api/workouts/:id', (req, res) => {
  Workout.findByIdAndUpdate(
    req.params.id,

    { $push: { exercises: req.body } },
    { new: true, runValidators: true }
  )

    .then((data) => res.json(data))
    .catch((err) => {
      console.log('error', err);

      res.json(err);
    });
});

//Get the last workout info for range
router.get('/api/workouts', (req, res) => {
  Workout.aggregate([
    {
      $addFields: {
        totalDuration: {
          $sum: '$exercises.duration',
        },
      },
    },
  ])
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

// Find all workouts within range

router.get('/api/workouts/range', (req, res) => {
  Workout.aggregate([
    {
      $addFields: {
        totalDuration: {
          $sum: '$exercises.duration',
        },
      },
    },
  ])
    .limit(7)
    .then((data) => res.json(data))

    .catch((err) => {
      console.log('error', err);

      res.json(err);
    });
});

module.exports = router;
