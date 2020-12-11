import React, { useContext, useEffect, useState } from "react"
import { PlantContext } from "./PlantProvider"
import { Plant } from "./Plant"
import "./Plant.css"
import { PlantGrid } from "./PlantGrid"
import { CultivationList } from "../Cultivation/CultivationList"


export const PlantList = () => {
    const { plants, getPlants } = useContext(PlantContext)
    const [plant, setplant ] = useState([])
    useEffect(() => {
        getPlants()
    }, [])
let plantArr = []
    return (
        <div className = "plants">
            <select className = "plantDrop" onChange= {(e) => {
               
            
            }}>
                <option value = "0" >Please select a crop...</option>
            {
                plants.map(pla => <Plant key = {pla.id} plant = {pla} />)
            }
            </select>
            
        </div>
    )
}