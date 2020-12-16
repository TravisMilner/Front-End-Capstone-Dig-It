import React, { useState } from "react"

export const PlotContext = React.createContext()

export const PlotProvider = (props) => {
    // plots and set plots are a useState. plots is a variable whose inital state is an empty array and setPlots is a function i can call after getting information to set that inital variable to the information i get back
    const [plots, setPlots] = useState([])

    // getPlots fetches my plots from my data base. It takes that response and puts into json readable format and then it calls the setPlot function with that information so it will set my inital variable of plots
    const getPlots = () => {
        return fetch ("http://localhost:8088/plots")
        .then(res => res.json())
        .then(setPlots)
    }

    // add plots is my post method that takes the information handled from save garden and adds it to the database. Every post makes a response so i put that response in JSON format
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
    // DeletePlot is my delete method for when i want to delete a garden based on the plotId. With JSON it also deletes my plants associated with that plotID so its a one stop shop. after it calls my getPlots fetch which sets my plot initial variable again with the updated information
    const deletePlot = (plotId) => {
        return fetch (`http://localhost:8088/plots/${plotId}`, {
            method: "DELETE"
        })
        .then(getPlots)
    }
    // This is where i provide my context of the functions in the  module so other components can use that information
    return (
        <PlotContext.Provider value = {{
            plots, getPlots, addPlots, deletePlot
        }}>
            {props.children}
        </PlotContext.Provider>
    )
}