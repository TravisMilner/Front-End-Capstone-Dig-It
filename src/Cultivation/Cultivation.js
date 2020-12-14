import React, { useContext } from "react"
import { PlantContext } from "../Plants/PlantProvider"

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
            <button onClick = {() => {
                setClickPlant(0)
            }}>Close</button>
        </div>
    </>
  }else {
      return null
  }
}