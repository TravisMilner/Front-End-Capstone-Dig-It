import React, { useContext, useEffect, useRef } from "react"
import {PlantContext} from "./PlantProvider"
import {Plant} from "./Plant"

export const PlantDetails = (props) => {
    const {plants, getPlants, addPlant } = useContext(PlantContext)

    useEffect (() => {
        getPlants()
    }, [])
    const plantId = useRef(null)
    return (
        <div className = "plants">
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