import React, { useContext, useEffect, useState } from "react"
import { PlantContext } from "./PlantProvider"
import { Plant } from "./Plant"
import "./Plant.css"
import {Cultivation} from "../Cultivation/Cultivation"
//PlantList gets plants associated with a specific plotId and returns plants by plant.name
export const PlantList = (props) => {
    
//    This is where i get my context from Plant Context 
    const { getPlantPlots, plantPlots, getPlantById, clickPlant, setClickPlant} = useContext(PlantContext)
    
    // This is my useEffect for what happens on pageload.
    useEffect(() => {
        const plotId = parseInt(props.match.params.plotId)
        getPlantPlots(plotId)
    }, [])
    console.log(plantPlots, "heeeeeeee")
    return (
        
            <div className ="plants__left">
                <h1>Cultivation Information</h1>
                {
                    // This is where i map over my plantPlots and make my button id the id of the plant so it knows which button i'm clicking on
                plantPlots.map(plant => {
                    
                  return (
                  <>
                    
                    
                      {/* setCLickPlant is a function that sets my clickplant state. It has an initial value of zero but when i click the button it sets it to the id of the plantPlots that i mapped over*/}
                  <div className = "buttons">
                    <button id = {parseInt(plant.plantId)} onClick = {(e) => {
                          console.log("button clicked" ,e)
                          setClickPlant(parseInt(plant.plantId))
                          
              
                          
                        //   This is my helper function so my button knows the name of the plant. Its like one big object. i map over the plants. get the plant id. get the name of that that plant
                    }}>{getPlantById(plant.plantId).name}</button>
                  </div>
                  </>
                )})
                
            }
            {/* This is my function from cultivation that lists the cultivation methods. i equated my paramater to my getplantbyid helper function and passed in the state of click plant based on the last that i clicked since thats my last state */}
            <Cultivation cult = {getPlantById(clickPlant)} />
            </div>
        
    )
}