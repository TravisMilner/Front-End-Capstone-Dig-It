import React from "react"
import {Route} from "react-router-dom"
import { NewPlot } from "./Plots/PlotConstruct"
import { PlotProvider } from "./Plots/PlotProvider"
import {PlantSelect} from "./Plants/PlantSelect"
import {PlantProvider} from "./Plants/PlantProvider"
import { PlantList } from "./Plants/PlantList"

export const ApplicationViews = (props) => {
    return (
        <>
            <PlotProvider>
                <PlantProvider>
                <Route exact path = "/" render = {
                    props => <NewPlot {...props} />
                } />

                <Route exact path = "/plantselection/:plotId(\d+)" render = {
                    props => 
                    <>
                    <PlantSelect {...props} />
                    {/* <PlantList {...props} /> */}
                    </>
                } />
                {/* <Route path = "plantselection/:plotId(\d+)" */}
                </PlantProvider>
            </PlotProvider>

            

        </>
    )
} 