const router = require('express').Router();
const db = require('../ models');

//Info for the workout page
router.get('/api/workouts', (req, res) => {
  Workout.find({})
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

//Create new workouts - k
router.post('/api/workouts/', (req, res) => {
  Workout.create(body)
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

//Get the last workout info for range - k
router.get('/api/workouts/range', ({}, res) => {
  Workout.find({})
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

//Update workouts by _id - k
router.put('/api/workouts/:id', (req, res) => {
  Workout.findByIdAndUpdate({ _id: req.params.id }, { exercises: req.body })
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

module.exports = router;
