import { useEffect, useState } from "react"
import WorkoutDetails from '../components/workoutDetails'
 // test
const Home = () =>{
    const [workouts, setWorkouts] = useState(null)

    //to fetch data from the backend
    useEffect(()=>{
        const fetchWorkouts = async()=>{
            
            const response = await fetch('http://localhost:4000/api/workouts')
            const json = await response.json()
            console.log(json)
            setWorkouts(json)
            // if(response.ok){
            //     setWorkouts(json)
            // }
        }


        fetchWorkouts()
    },[])
    //the empty dependency array [] only fires the useEffect state fucn once on the page load, and not everytime

    return (
        <div className="home">
            <div className="workouts">
                {workouts && workouts.map((workout) =>(
                    // <p key={workout._id}>{workout.title}</p>
                    <WorkoutDetails key = {workout._id} workout={workout}/>

                ))}
            </div>
        </div>
    )
}

export default Home