import React from 'react';
import './App.css';
import Image from './components/Image';
import Experience from './components/Experience';
import FindSocialMedia from './components/FindSocialMedia';
import './components/Experience.css'

function App() {
  const socialMedia = [
    {
      name: "LinkedIn",
      url: 'https://www.linkedin.com/in/sofia-ignatiadi-781a2116a/'
    },
    {
      name:'GitHub',
      url: 'https://github.com/sofiaIG'
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

  ]

  return (
    <>
    <h1>Sofia Ignatiadi</h1>
    <Image/>
    <Experience className = 'intro' repositories = {repositories}/>
    <FindSocialMedia socialMedia = {socialMedia}/>

    </>

    
  );
}

export default App;
