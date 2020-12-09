import React from "react"


export const PlantGrid = ({plantArr}) => {
    console.log(plantArr)

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
                <div className = "grid__item" id= "item--1">{obj.grid1}</div>
                <div className = "grid__item" id= "item--2">{obj.grid2}</div>
                <div className = "grid__item" id= "item--3">{obj.grid3}</div>
                <div className = "grid__item" id= "item--4">{obj.grid4}</div>
                <div className = "grid__item" id= "item--5">{obj.grid5}</div>
                <div className = "grid__item" id= "item--6">{obj.grid6}</div>
                <div className = "grid__item" id= "item--7">{obj.grid7}</div>
                <div className = "grid__item" id= "item--8">{obj.grid8}</div>
                <div className = "grid__item" id= "item--9">{obj.grid9}</div>
                <button>Save Grid</button>
                
            </div>



        </>

    )
}