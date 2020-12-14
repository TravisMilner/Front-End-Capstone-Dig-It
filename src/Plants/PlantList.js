import React, { useContext, useEffect, useState } from "react"
import { PlantContext } from "./PlantProvider"
import { Plant } from "./Plant"
import "./Plant.css"
import {Cultivation} from "../Cultivation/Cultivation"
//PlantList gets plants associated with a specific plotId and returns plants by plant.name
export const PlantList = (props) => {
    
    const [clickPlant, setClickPlant] = useState(0)
    const { getPlantPlots, plantPlots, getPlantById } = useContext(PlantContext)
    useEffect(() => {
        const plotId = parseInt(props.match.params.plotId)
        getPlantPlots(plotId)
    }, [])
    console.log(plantPlots, "heeeeeeee")
    return (
        <div className = "plants">
            <div className ="plants__left">
                {
                plantPlots.map(plant => {
                  return (
                  <>
                  <div>
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
        </div>
    )
}