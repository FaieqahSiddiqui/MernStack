const express = require('express')
const {createWorkout,
        getWorkout,
        getWorkouts,
        deleteWorkout,
        updateWorkout
    } = require('../controllers/workoutController')


//This creates an instance of the router for us
const router = express.Router()


//GET all workouts
router.get('/', getWorkouts)

//GET a single workout
router.get('/:id',getWorkout)

//POST a new workout
router.post('/',createWorkout)

router.delete('/:id', deleteWorkout)

router.patch('/:id', updateWorkout)


module.exports=router