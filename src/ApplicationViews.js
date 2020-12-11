import React from "react"
import {Route} from "react-router-dom"
import { NewPlot } from "./Plots/PlotConstruct"
import { PlotProvider } from "./Plots/PlotProvider"

export const ApplicationViews = (props) => {
    return (
        <>
            <PlotProvider>
                <Route exact path= "/">
                    <NewPlot />
                </Route>
            </PlotProvider>

        </>
    )
} 