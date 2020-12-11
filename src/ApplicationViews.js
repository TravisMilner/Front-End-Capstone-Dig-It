import React from "react"
import {Route} from "react-router-dom"
import { NewPlot } from "./Plots/PlotConstruct"
import { PlotProvider } from "./Plots/PlotProvider"
import {PlantDetails} from "./Plants/PlantDetails"
import {PlantProvider} from "./Plants/PlantProvider"

export const ApplicationViews = (props) => {
    return (
        <>
            <PlotProvider>
                <PlantProvider>
                <Route exact path = "/" render = {
                    props => <NewPlot {...props} />
                } />

                <Route exact path = "/plantselection" render = {
                    props => <PlantDetails {...props} />
                } />
                </PlantProvider>
            </PlotProvider>

            

        </>
    )
} 