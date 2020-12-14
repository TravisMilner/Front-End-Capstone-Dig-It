import React from "react"

export const Cultivation = ({cult}) => {
  if(cult) { return <>
        <div>
            <h2>{cult.name}</h2>
            <ul>
                <li >Sowing: {cult.sowing}</li>
                <li >Watering: {cult.watering}</li>
                <li >Harvest: {cult.harvest}</li>
            </ul>
        </div>
    </>
  }else {
      return null
  }
}