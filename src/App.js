import React from 'react';
import './App.css';
import Image from './components/Image';
import Experience from './components/Experience';
import FindSocialMedia from './components/FindSocialMedia';
import Tabs, { TabPane } from 'rc-tabs';
import AboutMe from './components/AboutMe';

function App() {
  const socialMedia = [
    {
      name: "LinkedIn",
      url: 'https://www.linkedin.com/in/sofia-ignatiadi-781a2116a/'
    },
    {
      name:'GitHub',
      url: 'https://github.com/sofiaIG'
    },
    {
      name:"Hackerrank",
      url: "https://www.hackerrank.com/sphignatiadi"
    }
  ]

  const repositories = [
    {
      name:'Ghibli Film',
      url: 'https://github.com/sofiaIG/Week7-WeekendHW/tree/main/src'
    },
    {
      name: 'Plant Inventory',
      url: 'https://github.com/sofiaIG/Shop_Inventory'
    }
    ,
    {
      name: 'MSM Shares',
      url : "https://github.com/sofiaIG/MSM-Shares"
    }

  ]

  function callback(e){
    console.log(e)
  }
  return (
    <div>
      <Image/>
      <Tabs defaultActiveKey="2" onChange={callback}>
        <TabPane tab = "About me" key="1">
          <AboutMe></AboutMe>
        </TabPane>
        <TabPane tab="Projects" key="2">
          <Experience repositories={repositories}/>
        </TabPane>
        <TabPane tab="Find me on" key="3">
          <FindSocialMedia socialMedia = {socialMedia}/>
        </TabPane>
      </Tabs>
    </div>

    
  );
}

export default App;

