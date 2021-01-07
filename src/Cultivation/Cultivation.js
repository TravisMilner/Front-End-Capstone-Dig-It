import React, { useContext } from "react"
import { PlantContext } from "../Plants/PlantProvider"

// This is simply a function that takes a parameter of cult that i equated to in a different module and returns the information from that database of plants
export const Cultivation = ({cult}) => {
    const {setClickPlant} = useContext(PlantContext)
  if(cult) { return <>
     <div className = "cultInfo__overlay">
        <div className = "cultInfo">
            <h2>{cult.name}</h2>
            <ul className = "cultList">
                <li ><strong>Sowing:</strong> {cult.sowing}</li>
                <br></br>
                <li ><strong>Watering:</strong> {cult.watering}</li>
                <br></br>
                <li ><strong>Harvest:</strong> {cult.harvest}</li>
            </ul>
            {/* This sets my click plant back to zero when i click close so my state goes back to normal and it will set a state based on the next plant i click */}
            <button onClick = {() => {
                setClickPlant(0)
            }}>Close</button>
        </div>
            
        </div>
    </>
  }else {
      return null
  }
}