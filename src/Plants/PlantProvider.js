import React, { useState } from "react"

export const PlantContext = React.createContext()

export const PlantProvider = (props) => {
    const [plants, setPlants] = useState([])
    const [plantPlots, setPlantPlots] = useState([])

    const getPlants = () => {
        return fetch ("http://localhost:8088/plants")
        .then(res => res.json())
        .then(setPlants)
    }

    const getPlantPlots = (plotId) => {
        return fetch (`http://localhost:8088/plantPlots?plotId=${plotId}&_expand=plant`)
        .then(res => res.json())
        .then(setPlantPlots)
    }

    const addPlant = (plants) => {
        return fetch ("http://localhost:8088/plantPlots", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(plants)
        })
        .then(p => p.json())
        .then(p => getPlantPlots(p.plotId))
        
    }

    return (
        <PlantContext.Provider value ={{
            plants, getPlants, addPlant, getPlantPlots, plantPlots
        }}>
            {props.children}
        </PlantContext.Provider>
    )
}