import {useState} from "react"

const WorkoutForm = () =>{
    const [title,setTitle] = useState('')
    const [reps,setReps] = useState('')
    const [load,setLoad] = useState('')

    const handleSubmit = async (e) =>{
        e.preventDefault()
    }

    return(
        <form className="create" onSubmit = {handleSubmit}>
            <h3>Add a new Workout</h3>
            <label>Exercise Title</label>
            <input type="text" onChange={(e) => setTitle(e.target.value)} value={title}/>

            <label>Load (in kg):</label>
            <input type="number" onChange={(e) => setLoad(e.target.value)} value={load}/>

            <label>Reps:</label>
            <input type="number" onChange={(e) => setReps(e.target.value)} value={reps}/>

            <button>Add Workout</button>
        </form>
    )
}