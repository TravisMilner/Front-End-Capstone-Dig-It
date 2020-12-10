import React, { useContext, useRef } from "react"
import { PlantContext } from "./PlantProvider"
import { PlotContext } from "../Plots/PlotProvider"




export const PlantGrid = ({plantArr}) => {
    console.log(plantArr)
    const {  addPlantPlot, getPlantByName } = useContext(PlantContext)
    const { plots, addPlots } = useContext(PlotContext) 

    const grid1 = useRef(null)
    const grid2 = useRef(null)
    const grid3 = useRef(null)
    const grid4 = useRef(null)
    const grid5 = useRef(null)
    const grid6 = useRef(null)
    const grid7 = useRef(null)
    const grid8 = useRef(null)
    const grid9 = useRef(null)

    const name = useRef(null)

    const constructNewPlot = () => {
        addPlots({
            name: name.current.value,
            userId: +localStorage.getItem("app_user_id")
        })
       
        
    }

const obj = {
    grid1: plantArr[0]  ? plantArr[0] : "",
    grid2: plantArr[1]  ? plantArr[1] : "",
    grid3: plantArr[2]  ? plantArr[2] : "",
    grid4: plantArr[3]  ? plantArr[3] : "",
    grid5: plantArr[4]  ? plantArr[4] : "",
    grid6: plantArr[5]  ? plantArr[5] : "",
    grid7: plantArr[6]  ? plantArr[6] : "",
    grid8: plantArr[7]  ? plantArr[7] : "",
    grid9: plantArr[8]  ? plantArr[8] : ""
}
console.log(obj)


    return (
        <>
            <div className = "grid">
                <div className = "grid__text" id="grid__text"><input type = "text" ref = {name}/>Name your garden..</div>
                <div className = "grid__item" id= "item--1" ref = {grid1}>{obj.grid1}</div>
                <div className = "grid__item" id= "item--2" ref= {grid2}>{obj.grid2} </div>
                <div className = "grid__item" id= "item--3" ref = {grid3}>{obj.grid3}</div>
                <div className = "grid__item" id= "item--4" ref = {grid4}>{obj.grid4}</div>
                <div className = "grid__item" id= "item--5" ref = {grid5}>{obj.grid5}</div>
                <div className = "grid__item" id= "item--6" ref = {grid6}>{obj.grid6}</div>
                <div className = "grid__item" id= "item--7" ref = {grid7}>{obj.grid7}</div>
                <div className = "grid__item" id= "item--8" ref = {grid8}>{obj.grid8}</div>
                <div className = "grid__item" id= "item--9" ref = {grid9}>{obj.grid9}</div>
                <button onClick = {() => {
                    constructNewPlot()
                
                }}>Save Grid</button>
                
            </div>



        </>

    )
}