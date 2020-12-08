import React from "react"

export const Plant = ({plant}) => (
    <>
        <option key={plant.id} value = {plant.id}>
            {plant.name}
        </option>
    </>
)