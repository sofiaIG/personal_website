import React from 'react'
import Projects from './Projects';
import AboutMe from './AboutMe';
import TechStack from './TechStack';
import FindSocialMedia from './SocialMedia';


const Home=()=>{


  const repositories = [
    {
      name: "Plant Inventory",
      url: "https://github.com/sofiaIG/Shop_Inventory",
    },
    {
      name: "MSM Shares",
      url: "https://github.com/sofiaIG/MSM-Shares",
    },
    {
      name: "Muse",
      url: "https://github.com/sofiaIG/muse-app",
    },
  ];
  return (
    <div id = 'home'>
        <AboutMe/>
        <TechStack />
        <Projects repositories ={repositories}/>
        <FindSocialMedia/>
    </div>
  )
}

export default Home