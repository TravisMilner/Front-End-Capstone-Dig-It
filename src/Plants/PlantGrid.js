import React, { useContext, useEffect, useState } from "react"
import { PlantContext } from "./PlantProvider"
import { Plant } from "./Plant"
import "./Plant.css"
import {Cultivation} from "../Cultivation/Cultivation"
import {PlantSelect} from "./PlantSelect"
//PlantList gets plants associated with a specific plotId and returns plants by plant.name
export const PlantGrid = (props) => {
    
   
    const { getPlantPlots, plantPlots, getPlantById, clickPlant, setClickPlant} = useContext(PlantContext)
    
    useEffect(() => {
        const plotId = parseInt(props.match.params.plotId)
        getPlantPlots(plotId)
    }, [])
    console.log(plantPlots, "heeeeeeee")
    return (
        
        <div className ="plants__right">
        
                {
                    
                    
                plantPlots.map(plant => {
                    
                  return (
                  <>
                    <div className = "grid"><p>{getPlantById(plant.plantId).name}</p></div>
                    
                      
                 
                  
                  </>
                )})
                
            }
            <button onClick = {() => {
              props.history.push("/")
            }}>Done with Plants</button>
            
            </div>
        
    )
}