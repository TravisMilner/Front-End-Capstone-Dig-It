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
                    
                    // This is essentially the same as my plantList. The only thing different is that its not in a button format. This will later be in grid format to show what an actual plot looks like.
                plantPlots.map(plant => {
                    // I'm simply mapping over my plantPlots, getting that plant by Id and the name of that particular plant and putting it in a p tage
                  return (
                  <>
                    <div  key = {plant.id}className = "grid"><p>{getPlantById(plant.plantId).name}</p></div>
                    
                      
                 
                  
                  </>
                )})
                
            }
            {/* This button just takes you to saved gardens so you can see what your saved gardens are */}
            <button onClick = {() => {
              props.history.push("/savedgardens")
            }}>Done with Plants</button>
            
            </div>
        
    )
}