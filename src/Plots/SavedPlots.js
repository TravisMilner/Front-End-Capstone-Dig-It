import React, { useEffect, useContext, useState } from "react"
import { PlotContext } from "./PlotProvider"
import {PlantContext} from "../Plants/PlantProvider"

// Below is the context that i receive from other components so I can use those functions or variables as needed
export const SavedPlots = (props) => {
    const {allPlantPlots, getPlantPlots, getAllPlantPlots, getPlantById} = useContext(PlantContext)
    const {plots, getPlots, deletePlot} = useContext(PlotContext)

    // These are my useStates. I need my plotPicked state to be inital value of zero and i set my plot picked based on the last id of the button i've clicked. This is so it knows what garden to render when selecting my saved garden.

    const [plotPicked, setPlotPicked] = useState(0)

    // gardenPlots initial state is an empty array. I use my setGardenPlots function to filter through  my array of allPlantPlots and set the id of PlotId to the id of the current state plotPicked is in.

    const [gardenPlots, setGardenPlots] = useState([])
    
    // the plotpicked and allplantplots looks to see if those states changed and then runs the code above it.
    useEffect(() => {
        setGardenPlots(allPlantPlots.filter(pp => +pp.plotId === +plotPicked))
                                
    }, [plotPicked, allPlantPlots])

    // this runs on page load 

    useEffect(() => {
        getAllPlantPlots()
        .then(getPlots)
    }, [])

   

    return (
        <>
                <img className = "savedImg" src = "/digit.png" />
            <div className = "savedGardens">
            <div className = "savedGarden">
                <h2>Saved Gardens</h2>
                {
                    // This is where i map over my plots and if the current user value equals the userId of my plot then i will display a button with the name of that particular plot.
                    plots.map(p => {
                        
                        if(+localStorage.getItem("app_user_id") === p.userId) {
                            return <button key = {p.id} onClick = {() => {
                                // on click it sets my plotPicked initial state with the id of my plot.
                                setPlotPicked(parseInt(p.id))
                                
                                
                                
                            }}>{p.name}</button>
                        }
                    })
                }
                    {/* Here i am mapping through my gardenPlots. I have a helper function that simply gets the plant by Id and takes a parameter which is essentially an object. I access the name value of that object and that gets displayed to show the plants in that particular plot. */}
                <div>{gardenPlots.map(gp => {
                return (
                    <>
                    <p>
                    {getPlantById(gp.plantId).name}
                    
                    </p>
                    </>
                )})}
                
                {/* This is a conditional if you will that checks to see if plotPicked has a value, my deletePlot is my delete fetch that takes in the value of plot picked so it knows which plot id to delete */}
                { plotPicked ? <button onClick = {() => {
                    deletePlot(plotPicked)
                    .then(setPlotPicked(0))
                }}>Delete Garden</button> : ``}
                </div>
                
            </div>
            {/* My close button sets my plot picked back to zero so it wont show my plants anymore and also so it knows that the next garden i click on has an id  */}
            <div> { plotPicked ? <button onClick = {() => {
                setPlotPicked(0)
            }}>Close</button> : `` }
            </div>

            {/* This button simply takes you back to start a new garden by naming it. */}
            <div><button onClick = {() => {
                props.history.push("/")
            }}>Start a new Garden</button></div>

        </div>
        </>
    )

}