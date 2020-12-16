import React, { useContext } from "react"
import { PlantContext } from "../Plants/PlantProvider"

// This is simply a function that takes a parameter of cult that i equated to in a different module and returns the information from that database of plants
export const Cultivation = ({cult}) => {
    const {setClickPlant} = useContext(PlantContext)
  if(cult) { return <>
        <div>
            <h2>{cult.name}</h2>
            <ul>
                <li >Sowing: {cult.sowing}</li>
                <li >Watering: {cult.watering}</li>
                <li >Harvest: {cult.harvest}</li>
            </ul>
            {/* This sets my click plant back to zero when i click close so my state goes back to normal and it will set a state based on the next plant i click */}
            <button onClick = {() => {
                setClickPlant(0)
            }}>Close</button>
        </div>
    </>
  }else {
      return null
  }
}