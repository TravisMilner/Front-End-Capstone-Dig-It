import React, { useContext, useEffect, useState } from "react"
import { PlantContext } from "./PlantProvider"
import { Plant } from "./Plant"
import "./Plant.css"
import {Cultivation} from "../Cultivation/Cultivation"
import {PlantSelect} from "./PlantSelect"
//PlantList gets plants associated with a specific plotId and returns plants by plant.name
export const PlantGrid = (props) => {
    
   
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
        
        <div className ="plants__right">
        
                {
                    
                    
                plantPlots.map(plant => {
                    
                  return (
                  <>
                    <div className = "grid"><p>{getPlantById(plant.plantId).name}</p></div>
                    
                      
                 
                  
                  </>
                )})
                
            }
            <button>Done with Plants</button>
            
            </div>
        
    )
}