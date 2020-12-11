import React, { useState } from "react"

export const PlantContext = React.createContext()

export const PlantProvider = (props) => {
    const [plants, setPlants] = useState([])
    const [plots, setPlots] = useState([])

    const getPlants = () => {
        return fetch ("http://localhost:8088/plants")
        .then(res => res.json())
        .then(setPlants)
    }

    const getPlantPlots = () => {
        return fetch ("http://localhost:8088/plantPlots")
        .then(res => res.json())
        .then(setPlots)
    }

    const addPlant = (plants) => {
        return fetch ("http://localhost:8088/plantPlots", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(plants)
        })
        .then(getPlants)
        
    }

    return (
        <PlantContext.Provider value ={{
            plants, getPlants, addPlant, getPlantPlots, plots
        }}>
            {props.children}
        </PlantContext.Provider>
    )
}