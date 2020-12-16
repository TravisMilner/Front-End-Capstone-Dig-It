// import React, { useContext, useState } from "react";
// import { PlantContext } from "./PlantProvider";
// import { Cultivation } from "../Cultivation/Cultivation";



// export const Plant = ({ plant, plantId }) => {
//     const {getPlantById} = useContext(PlantContext)
//  const [clickPlant, setClickPlant] = useState(0)
   
//  return <>
//     <div>
//       <button id = {parseInt(plantId)} onClick = {(e) => {
//             console.log("button clicked" ,e)
//             setClickPlant(parseInt(plantId))
            

            
            
//       }}>{plant}</button>
//       <Cultivation cult = {getPlantById(clickPlant)} />
//     </div>
//   </>
// };