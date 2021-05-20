const router = require('express').Router();
const Workout = require('../models');
const path = require('path');

//Info for the workout page - k
router.get('/api/workouts', (req, res) => {
  Workout.Workout.find({})
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

//Create new workouts
router.post('/api/workouts', (req, res) => {
  Workout.Workout.create({})
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

//Get the last workout info for range - k
router.get('/api/workouts/range', (req, res) => {
  Workout.Workout.find({})
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

//Update workouts by id - check
router.put('/api/workouts/:id', (req, res) => {
  // const id = req.params.id;
  // const body = req.body;

  Workout.Workout.findByIdAndUpdate(req.params.id, {
    $push: { exercises: req.body },
  })
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

module.exports = router;
