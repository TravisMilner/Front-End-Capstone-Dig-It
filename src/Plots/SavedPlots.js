import React, { useEffect, useContext, useState } from "react"
import { PlotContext } from "./PlotProvider"
import {PlantContext} from "../Plants/PlantProvider"


export const SavedPlots = (props) => {
    const {allPlantPlots, getPlantPlots, getAllPlantPlots, getPlantById} = useContext(PlantContext)
    const {plots, getPlots, deletePlot} = useContext(PlotContext)
    const [plotPicked, setPlotPicked] = useState(0)
    const [gardenPlots, setGardenPlots] = useState([])
    

    useEffect(() => {
        setGardenPlots(allPlantPlots.filter(pp => +pp.plotId === +plotPicked))
                                
    }, [plotPicked, allPlantPlots])

    useEffect(() => {
        getAllPlantPlots()
        .then(getPlots)
    }, [])

   

    return (
        <>
            <div className = "savedGarden">
                <h2>Saved Gardens</h2>
                {
                    plots.map(p => {
                        
                        if(+localStorage.getItem("app_user_id") === p.userId) {
                            return <button key = {p.id} onClick = {() => {
                                setPlotPicked(parseInt(p.id))
                                
                                
                                
                            }}>{p.name}</button>
                        }
                    })
                }

                <div>{gardenPlots.map(gp => {
                return (
                    <>
                    <p>
                    {getPlantById(gp.plantId).name}
                    
                    </p>
                    </>
                )})}
                
                { plotPicked ? <button onClick = {() => {
                    deletePlot(plotPicked)
                    .then(setPlotPicked(0))
                }}>Delete Garden</button> : ``}
                </div>
                
            </div>
            <div><button onClick = {() => {
                setPlotPicked(0)
            }}>Close</button></div>
            <div><button onClick = {() => {
                props.history.push("/")
            }}>Start a new Garden</button></div>


        </>
    )

}