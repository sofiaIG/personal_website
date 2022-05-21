import React from 'react';
import './App.css';
import Image from './components/Image';
import Experience from './components/Experience';
import FindSocialMedia from './components/FindSocialMedia';

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

  return (
    <>
    <h1>Sofia Ignatiadi</h1>
    <Image/>
    <Experience repositories = {repositories}/>
    <FindSocialMedia socialMedia = {socialMedia}/>

    </>

    
  );
}

export default App;
