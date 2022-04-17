import React from "react";
import SocialMediaItems from "./SocialMediaItems";

const FindSocialMedia=({socialMedia})=>{
    const socialMediaItems = socialMedia.map((media, index)=>{
        return(
            <SocialMediaItems media = {media} key = {index}/>
        )
    })
    return(
        <div>
            <h2>Find me on:</h2>
            <ul>
                {socialMediaItems}
            </ul>
        </div>
    )

}

export default FindSocialMedia;