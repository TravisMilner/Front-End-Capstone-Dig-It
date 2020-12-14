import React, { useContext, useEffect, useRef } from "react"
import {PlantContext} from "./PlantProvider"
import {Plant} from "./Plant"
import {PlantList} from "./PlantList"

// This component is responsible for rendering a drop down of my plants and POSTing to database on select change


export const PlantSelect = (props) => {
    const {plants, getPlants, addPlant, getPlantPlots, plots } = useContext(PlantContext)

    useEffect (() => {
        getPlants()
        
    }, [])
    const plantId = useRef(null)
    return (
        <>
            <h1>Now lets select some plants..</h1>
            <select ref = {plantId}  className= "plantDrop" onChange = {(e) => {
                    console.log(e)

                    


                    addPlant({
                        plotId: +props.match.params.plotId,
                        plantId: +plantId.current.value
                    })
            }}>
                <option value = "0">Plant Selection...</option>
                {
                    plants.map(plant => <option key={plant.id} value={plant.id} plant={plant}>{plant.name}</option>)
                }


            </select>
           

            
       </>
    )
}