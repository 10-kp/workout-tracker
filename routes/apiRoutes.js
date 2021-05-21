const router = require('express').Router();
const Workout = require('../models');
const path = require('path');

//Info for the workout page
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

//Get the last workout info for range
router.get('/api/workouts/range', (req, res) => {
  Workout.Workout.aggregate([
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

router.get('/api/workouts', (req, res) => {
  Workout.Workout.aggregate([
    {
      $addFields: {
        totalDuration: {
          $sum: '$exercises.duration',
        },
      },
    },
  ])
    .then((dbWorkouts) => {
      res.json(dbWorkouts);
    })
    .catch((err) => {
      res.json(err);
    });
});

//Update workouts by id
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
