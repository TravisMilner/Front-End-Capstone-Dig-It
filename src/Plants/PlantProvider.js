import React, { useState } from "react"

export const PlantContext = React.createContext()

export const PlantProvider = (props) => {
    const [allPlantPlots, setAllPlantPlots] = useState([])
    const [plants, setPlants] = useState([])
    const [plantPlots, setPlantPlots] = useState([])
    const [clickPlant, setClickPlant] = useState(0)

    const getPlants = () => {
        return fetch ("http://localhost:8088/plants")
        .then(res => res.json())
        .then(setPlants)
    }

    const getAllPlantPlots = () => {
        return fetch ("http://localhost:8088/plantPlots")
        .then(res => res.json())
        .then(setAllPlantPlots)
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
        .then(getAllPlantPlots)
        
    }

    const getPlantById = (plantId) => {
       return plants.find(plant=> plant.id === plantId)
    }

    return (
        <PlantContext.Provider value ={{
            plants, getPlants, addPlant, getPlantPlots, plantPlots, getPlantById, clickPlant, setClickPlant, setAllPlantPlots, getAllPlantPlots, allPlantPlots
        }}>
            {props.children}
        </PlantContext.Provider>
    )
}