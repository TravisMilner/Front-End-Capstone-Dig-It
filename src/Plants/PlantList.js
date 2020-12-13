import React, { useContext, useEffect, useState } from "react"
import { PlantContext } from "./PlantProvider"
import { Plant } from "./Plant"
import "./Plant.css"
import { PlantGrid } from "./PlantGrid"
import { CultivationList } from "../Cultivation/CultivationList"


export const PlantList = (props) => {
    const { plants, getPlants, getPlantPlots, plots } = useContext(PlantContext)
    const [plant, setplant ] = useState([])
    const plotId = parseInt(props.match.params.plotId)
    useEffect(() => {
        getPlantPlots(plotId)
        
    }, [])

    console.log(plots)
    return (

        <div className = "plants">
            <div className ="plants__left">
                {plots.map(plant => plant.plant.name)
                
                }

            </div>
            
            
        </div>
    )
}