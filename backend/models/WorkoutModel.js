const mongoose= require('mongoose')

const Schema = mongoose.Schema

const workoutSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    reps:{
        type: Number,
        required: true
    },
    load:{
        type: Number,
        required: true
    }
}, { timestamps: true })


//Models are based on the schema, then the model is used to apply that schema to a particular model, and then we use the model to interact with a collection of that name(data?)

module.exports = mongoose.model('Workout',workoutSchema)

