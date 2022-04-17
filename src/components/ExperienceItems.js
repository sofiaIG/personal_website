import React from "react";

const ExperienceItems=({repository})=>{
    return(
        <>
            <a href={repository.url}>{repository.name}</a><br></br>
            {/* {console.log('exp items', repository.name)} */}
       
        </>
    )

}


export default ExperienceItems;