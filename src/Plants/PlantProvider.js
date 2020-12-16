import React, { useState } from "react"

export const PlantContext = React.createContext()
// These are all my states. It takes the inital value and sets it as what i use in the parentheses, the second is a function that when called it will take the information i pass to it and set the variable to that information
export const PlantProvider = (props) => {
    const [allPlantPlots, setAllPlantPlots] = useState([])
    const [plants, setPlants] = useState([])
    const [plantPlots, setPlantPlots] = useState([])
    const [clickPlant, setClickPlant] = useState(0)

    // getplants is my fetch call. it simply gets all my plants from the database, takes the response in JSON format and sets my pants variable(which is an empty array) to an array of my plant objects
    const getPlants = () => {
        return fetch ("http://localhost:8088/plants")
        .then(res => res.json())
        .then(setPlants)
    }

    // getAllPlantPlots is my fetch call that gets my plantPlots(plants in a specific plot) takes the response in JSON format and sets my plantPlots variable(which is an empty array) to an array of my specific plants in a specific plot objects

    const getAllPlantPlots = () => {
        return fetch ("http://localhost:8088/plantPlots")
        .then(res => res.json())
        .then(setAllPlantPlots)
    }

    // getPlantPlots takes a plot id and is a fetch method for getting an expanded plot database. this makes it easier to access the plants in that plot based on ID. Then it sets my plantPlots which was an empty array to an array of whatever plotID is passed later

    const getPlantPlots = (plotId) => {
        return fetch (`http://localhost:8088/plantPlots?plotId=${plotId}&_expand=plant`)
        .then(res => res.json())
        .then(setPlantPlots)
    }

    // addPlant is my POST method that i use later for adding plants to my plantPlots. I then get that response and call getPlantPlots and pass in the plotId of the response. Its a big object. Then i call getallplantplots which fetches my plantPlots and sets the initial variable with the information that i get back from each selected plant
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

    // This is a helper function. I need the id of the plant many times so i call this function and what i pass through it will bring me the id. it loops over my plants array and matches the id to the of each plant to whatever the id i pass in as an argument later

    const getPlantById = (plantId) => {
       return plants.find(plant=> plant.id === plantId)
    }

    // This is just my plant context that i use so i can use all these functions and methods for later modules

    return (
        <PlantContext.Provider value ={{
            plants, getPlants, addPlant, getPlantPlots, plantPlots, getPlantById, clickPlant, setClickPlant, setAllPlantPlots, getAllPlantPlots, allPlantPlots
        }}>
            {props.children}
        </PlantContext.Provider>
    )
}