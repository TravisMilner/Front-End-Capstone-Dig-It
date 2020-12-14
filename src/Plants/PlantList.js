import React, { useContext, useEffect, useState } from "react"
import { PlantContext } from "./PlantProvider"
import { Plant } from "./Plant"
import "./Plant.css"
//PlantList gets plants associated with a specific plotId and returns plants by plant.name
export const PlantList = (props) => {
    const { getPlantPlots, plantPlots } = useContext(PlantContext)
    useEffect(() => {
        const plotId = parseInt(props.match.params.plotId)
        getPlantPlots(plotId)
    }, [])
    console.log(plantPlots, "heeeeeeee")
    return (
        <div className = "plants">
            <div className ="plants__left">
                {
                plantPlots.map(plot => <Plant key={plot.id} plant={plot.plant.name} />)
                }
            </div>
        </div>
    )
}