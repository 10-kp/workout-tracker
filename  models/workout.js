const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now,
  },
  exercises: [
    {
      type: { type: String, required: 'Choose a workout option' },
      name: {
        type: String,
        required: 'What is the name of the workout?',
      },
      duration: {
        type: Number,
        required: 'Number of minutes for the workout?',
      },
      weight: {
        type: Number,
        required: 'What is the desired weight?',
      },
      reps: {
        type: Number,
        required: 'How many reps to do?',
      },
      sets: {
        type: Number,
        required: 'How many sets do you want to do?',
      },
      distance: {
        type: Number,
      },
    },
  ],
});

const Workout = mongoose.model('Workout', workoutSchema);

module.exports = Workout;
