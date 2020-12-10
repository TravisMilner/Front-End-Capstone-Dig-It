import React, { useState } from "react"



export const PlantContext = React.createContext()

export const PlantProvider = (props) => {
    const [plants, setPlants] = useState([])

    const getPlantByName = (name) => {
        plants.find(p => p.name === name)
    }

    const getPlants = () => {
        return fetch ("http://localhost:8088/plants")
        .then(res => res.json())
        .then(setPlants)
    }

    return (
        <PlantContext.Provider value ={{
            plants, getPlants, getPlantByName
        }}>
            {props.children}
        </PlantContext.Provider>
    )
}