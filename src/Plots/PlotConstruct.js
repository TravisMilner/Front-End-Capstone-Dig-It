import React, { useContext, useRef } from "react"
import {  PlotContext } from "./PlotProvider"

export const NewPlot = () => {
    const {addPlots} = useContext(PlotContext)

    const name = useRef(null)

    return (
        <>
            <h1>Welcome To Dig It</h1>
            <h2>Name your garden to get started</h2>
            <input type = "text" ref = {name} placeholder= "Name your garden.."></input>
            <button onClick = {() => {
                addPlots({
                    name: name.current.value,
                    userId: +localStorage.getItem("app_user_id")
                })
            }} >Save Garden</button>


        </>
    )
}