import React, { useContext, useRef } from "react"
import {  PlotContext } from "./PlotProvider"
import {SavedPlots} from "./SavedPlots"
import "./PlotConstruct.css"

// This module is for naming a new garden. 

export const NewPlot = (props) => {

    // I need my addPlots, and getPlots from my PlotContext. 
    const {addPlots, getPlots} = useContext(PlotContext)
    // My variable of Name is currently null so i can capture what is typed in later
    const name = useRef(null)

    return (
        <>
            <img className= "digIt" src = "/digit.png" alt = "logo"  />
            <h1>Welcome To Dig It</h1>
            <h2>Name your garden to get started</h2>
            <div><input type = "text" ref = {name} placeholder= "Name your garden.."></input></div>
            {/* When a user clickss on save garden it will use addPlots. This will take the current value of what is typed in and POST it to my Plots database, The userId is getting the localStorage of currently logged in user */}
            <button onClick = {() => {
                addPlots({
                    name: name.current.value,
                    userId: +localStorage.getItem("app_user_id")
                })
                // After it POSTS it creates a response. I take that respnse and and use the id to take me to the plant selection based on that specific plot id
                .then((resObj) => props.history.push(`/plantselection/${resObj.id}`))
                // After I get that id to take me to specific garden, I get plots which simiply fetches the plots and sets the state of my current plots
                .then(getPlots)
            }} >Save Garden</button>

            {/* This is where the current user can get to their saved gardens */}
            <button onClick = {() => {
                props.history.push("/savedgardens")
            }}>Go to saved gardens</button>

            
        </>
    )
}