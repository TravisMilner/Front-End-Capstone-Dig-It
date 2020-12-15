import React, { useState } from "react"

export const PlotContext = React.createContext()

export const PlotProvider = (props) => {
    const [plots, setPlots] = useState([])

    const getPlots = () => {
        return fetch ("http://localhost:8088/plots")
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
        .then(res => res.json())
        // .then(getPlots)
    }

    const deletePlot = (plotId) => {
        return fetch (`http://localhost:8088/plots/${plotId}`, {
            method: "DELETE"
        })
        .then(getPlots)
    }

    return (
        <PlotContext.Provider value = {{
            plots, getPlots, addPlots, deletePlot
        }}>
            {props.children}
        </PlotContext.Provider>
    )
}