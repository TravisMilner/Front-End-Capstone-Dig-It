import React, { useState } from "react"

export const PlotContext = React.createContext()



export const PlotProvider = (props) => {
    const [plots, setPlots] = useState([])
    const [plantPlots, setPlantPlots] = useState([])

    const getPlots = () => {
        return fetch("http://localhost:8088/plots")
        .then(res => res.json())
        .then(setPlots)
    }

    const addPlots = (plots) => {
        return fetch ("http://localhost:8088/plots", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(plots)
        })
        
    }

    const getPlantPlots = () => {
        return fetch ("http://localhost:8088/plantPlots")
        .then(res => res.json())
        .then(setPlantPlots)
    }

    const addPlantPlots = (plantPlots) => {
        return fetch ("http://localhost:8088/plantPlots", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(plantPlots)
        })
        .then(getPlantPlots)
    }

    return (
        <PlotContext.Provider value = {{
            plots, addPlots, getPlots, getPlantPlots, plantPlots, addPlantPlots
        }}>
            {props.children}
        </PlotContext.Provider>
    )
}