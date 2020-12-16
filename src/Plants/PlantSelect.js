import React, { useContext, useEffect, useRef } from "react"
import {PlantContext} from "./PlantProvider"
import {Plant} from "./Plant"
import {PlantList} from "./PlantList"

// This component is responsible for rendering a drop down of my plants and POSTing to database on select change


export const PlantSelect = (props) => {

    // This is where i get my information from other components using my plant context
    const {plants, getPlants, addPlant, getPlantPlots, plots, plantPlots } = useContext(PlantContext)

    // This is my use effect so on page load it gets my plants from my getPlants fetch call
    useEffect (() => {
        getPlants()
        
    }, [])

    // plantId takes an initial value of null that we will capture later in my addPlant POST method
    const plantId = useRef(null)
    return (
        <>
            <h1>Select nine plants for your garden..</h1>

            {/* This is my drop down that holds my plants. On change it will call my addPlant POST method and plug in the plotId by using my params which comes from the props, and it will plug in the plantId by taking the current value of what was selected */}
            <select ref = {plantId}  className= "plantDrop" onChange = {(e) => {
                    console.log(e)
                    // This is to prevent a user from selecting more that 9 plants. I'm getting my plantPlots and making sure the length of that array is not more than 9
                    if(plantPlots.length < 9 ) {
                        addPlant({
                        plotId: +props.match.params.plotId,
                        plantId: +plantId.current.value
                    })} else {
                        window.alert("you've reached the limit")
                    }
                    


                    
            }}>
                {/* This simply maps over my plants and sets each option so i can have a drop down. it sets my value as the plantId so when it was selected i can capture that value as an id rather than a string */}
                <option value = "0">Plant Selection...</option>
                {
                    plants.map(plant => <option key={plant.id} value={plant.id} plant={plant}>{plant.name}</option>)
                }


            </select>
           

            
       </>
    )
}