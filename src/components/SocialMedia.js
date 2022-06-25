import React from "react";
import github from "../images/logos/github.png";
import hackerRank from "../images/logos/hackerRank.png";
import linkedin from "../images/logos/linkedin.png";

const FindSocialMedia=()=>{
    return(
        <div id="social-media">
        <h1>Contact me</h1>
        <div id="social-media-logos">
          <div className="social">
            <a href="https://www.linkedin.com/in/sofia-ignatiadi-781a2116a/"><img src={linkedin} alt="linkedinLogo" />
            </a>
            <p>LinkedIn</p>
          </div>
          <div className="social">
            <a href="https://github.com/sofiaIG"><img src={github} alt="githubLogo" />
            </a>
            <p>GitHub</p>
          </div>
          <div className="social">
            <a href="https://www.hackerrank.com/sphignatiadi"><img src={hackerRank} alt="hackerRankLogo" />
            </a>
            <p>HackerRank</p>
          </div>
      </div>
      </div>
    );
    

}

export default FindSocialMedia;