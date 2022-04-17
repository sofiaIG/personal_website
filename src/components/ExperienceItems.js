import React from "react";

const ExperienceItems=({repository})=>{
    return(
        <>
            
            <a href={repository.url}>{repository.name}</a><br></br>
       
        </>
    )

}


export default ExperienceItems;