import React from "react";

const ExperienceItems=({repository})=>{
    return(
        <>
        <ul>
            <li>{repository.name}: {repository.url}</li>
        </ul>
        </>
    )

}


export default ExperienceItems;