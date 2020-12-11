import React, { useContext, useEffect, useRef } from "react"
import {PlantContext} from "./PlantProvider"
import {Plant} from "./Plant"

export const PlantDetails = (props) => {
    const {plants, getPlants, addPlant, getPlantPlots, plots } = useContext(PlantContext)

    useEffect (() => {
        getPlants()
        .then(getPlantPlots)
    }, [])
    const plantId = useRef(null)
    return (
        <div className = "plants">
            <h2>Now select your plants..</h2>
            <select ref = {plantId} className= "plantDrop" onChange = {(e) => {
                    


                    addPlant({
                        plotId: 1,
                        plantId: +plantId.current.value
                    })
            }}>
                <option value = "0">Plant Selection...</option>
                {
                    plants.map(pla => <Plant key = {pla.id} plant = {pla} />)
                }


            </select>
        </div>
    )
}