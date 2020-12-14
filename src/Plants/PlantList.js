import React, { useContext, useEffect, useState } from "react"
import { PlantContext } from "./PlantProvider"
import { Plant } from "./Plant"
import "./Plant.css"
import {Cultivation} from "../Cultivation/Cultivation"
//PlantList gets plants associated with a specific plotId and returns plants by plant.name
export const PlantList = (props) => {
    
   
    const { getPlantPlots, plantPlots, getPlantById, clickPlant, setClickPlant} = useContext(PlantContext)
    // if(plantPlots.length() > 9) {
    //     window.alert("you've reached the limit")
    // }
    useEffect(() => {
        const plotId = parseInt(props.match.params.plotId)
        getPlantPlots(plotId)
    }, [])
    console.log(plantPlots, "heeeeeeee")
    return (
        
            <div className ="plants__left">
                <h1>Cultivation Information</h1>
                {
                    
                plantPlots.map(plant => {
                    
                  return (
                  <>
                    
                    
                      
                  <div className = "buttons">
                    <button id = {parseInt(plant.plantId)} onClick = {(e) => {
                          console.log("button clicked" ,e)
                          setClickPlant(parseInt(plant.plantId))
                          
              
                          
                          
                    }}>{getPlantById(plant.plantId).name}</button>
                  </div>
                  </>
                )})
                
            }
            
            <Cultivation cult = {getPlantById(clickPlant)} />
            </div>
        
    )
}