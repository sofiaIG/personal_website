import React from "react";
import ExperienceItems from "./ExperienceItems";

const Experience=({repositories})=>{

    const repositories_items = repositories.map((repository, index)=>{
        
        return 
        <ExperienceItems repository= {repository} key ={index}/>
    })
        
    return(
        <>
        {repositories_items}
        </>
    )

}

export default Experience;