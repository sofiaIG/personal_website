import React from 'react'
import Projects from './Projects';
import AboutMe from './AboutMe';
import TechStack from './TechStack';
import FindSocialMedia from './SocialMedia';


const Home=()=>{

  return (
    <div id = 'home'>
        <AboutMe/>
        <TechStack />
        <Projects/>
        <FindSocialMedia/>
    </div>
  )
}

export default Home