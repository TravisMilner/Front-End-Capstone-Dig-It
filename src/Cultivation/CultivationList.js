import React, {useContext, useState} from "react"
import {PlantContext} from "../Plants/PlantProvider"



export const CultivationList = ({plantArr}) => {
    const [extraJs, setExtraJs] = useState(null)

    
    const { plants } = useContext(PlantContext)
    const CultClick = (cultPlant) => {
        let plantObj = plants.find(p => p.name === cultPlant)
        console.log(plantObj)
        setExtraJs (
            <div>
                <ul>
                    <li>Sowing: {plantObj.sowing} </li>
                    <li>Watering: {plantObj.watering}</li>
                    <li>Harvesting: {plantObj.harvest}</li>
                </ul>
            </div>
        )
    }
    console.log(plantArr)
    
    const obj = {
        cult1: plantArr[0]  ? plantArr[0] : "",
        cult2: plantArr[1]  ? plantArr[1] : "",
        cult3: plantArr[2]  ? plantArr[2] : "",
        cult4: plantArr[3]  ? plantArr[3] : "",
    cult5: plantArr[4]  ? plantArr[4] : "",
    cult6: plantArr[5]  ? plantArr[5] : "",
    cult7: plantArr[6]  ? plantArr[6] : "",
    cult8: plantArr[7]  ? plantArr[7] : "",
    cult9: plantArr[8]  ? plantArr[8] : ""
}
console.log(obj)
console.log(extraJs)

    return (
        <>
            <div className = "grid">
                 {extraJs}
                <div className = "cult__item" id= "item--1"><li><button onClick = {() => {CultClick(obj.cult1)}}>{obj.cult1}</button></li></div>
                <div className = "cult__item" id= "item--2"><li><button onClick = {() => {CultClick(obj.cult2)}}>{obj.cult2}</button></li></div>
                <div className = "cult__item" id= "item--3"><li><button onClick = {() => {CultClick(obj.cult3)}}>{obj.cult3}</button></li></div>
                <div className = "cult__item" id= "item--4"><li><button onClick = {() => {CultClick(obj.cult4)}}>{obj.cult5}</button></li></div>
                <div className = "cult__item" id= "item--5"><li><button onClick = {() => {CultClick(obj.cult5)}}>{obj.cult5}</button></li></div>
                <div className = "cult__item" id= "item--6"><li><button onClick = {() => {CultClick(obj.cult6)}}>{obj.cult6}</button></li></div>
                <div className = "cult__item" id= "item--7"><li><button onClick = {() => {CultClick(obj.cult7)}}>{obj.cult7}</button></li></div>
                <div className = "cult__item" id= "item--8"><li><button onClick = {() => {CultClick(obj.cult8)}}>{obj.cult8}</button></li></div>
                <div className = "cult__item" id= "item--9"><li><button onClick = {() => {CultClick(obj.cult9)}}>{obj.cult9}</button></li></div>
            
               
                
            </div>



        </>

    )
}