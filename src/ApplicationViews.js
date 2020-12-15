import React from "react"
import {Route} from "react-router-dom"
import { NewPlot } from "./Plots/PlotConstruct"
import { PlotProvider } from "./Plots/PlotProvider"
import {PlantSelect} from "./Plants/PlantSelect"
import {PlantProvider, PlantContext} from "./Plants/PlantProvider"
import { PlantList } from "./Plants/PlantList"
import {PlantGrid} from "./Plants/PlantGrid"
import "./Plants/Plant.css"
import { SavedPlots } from "./Plots/SavedPlots"

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
                    <div className = "plantParent">
                    <div className = "plants__right">
                    <PlantSelect {...props} />
                    <PlantGrid {...props} />
                    </div>
                    <div className = "plants__left">
                    <PlantList {...props} />
                    </div>
                    </div>
                    <SavedPlots />
                    </>
                } />
                {/* <Route path = "plantselection/:plotId(\d+)" */}
                </PlantProvider>
            </PlotProvider>

            

        </>
    )
} 