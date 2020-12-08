import React, { useContext, useEffect } from "react"
import { PlantContext } from "./PlantProvider"
import { Plant } from "./Plant"
import "./Plant.css"


export const PlantList = () => {
    const { plants, getPlants } = useContext(PlantContext)

    useEffect(() => {
        getPlants()
    }, [])

    return (
        <div className = "plants">
            <select className = "plantDrop">
                <option value = "0">Please select a crop...</option>
            {
                plants.map(pla => <Plant key = {pla.id} plant = {pla} />)
            }
            </select>
        </div>
    )
}