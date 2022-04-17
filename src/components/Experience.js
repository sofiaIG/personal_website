import React from "react";
import ExperienceItems from "./ExperienceItems";


const Experience=({repositories})=>{

    const repositoriesItems = repositories.map((repository, index)=>{ 
        return <ExperienceItems repository= {repository} key ={index}/>
    })
        
    return(
        <div>
        <ul>
        <h2>Things that I have build</h2>
          {repositoriesItems}
        </ul>
      </div>

    )

}

export default Experience;