import React from 'react';
import './App.css';
import Experience from './components/Experience';
import FindSocialMedia from './components/FindSocialMedia';
import Tabs, { TabPane } from 'rc-tabs';
import AboutMe from './components/AboutMe';
import { BrowserRouter, HashRouter, NavLink, Route, Routes } from 'react-router-dom';

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
      name:"HackerRank",
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

      <BrowserRouter>
      <header>
        <nav>
          <ul>
            <li><NavLink to="about-me" children="about" /></li>
            <li><NavLink to="projects" children="projects" /></li>
            <li><NavLink to="social-media" children="social medias  " /></li>
          </ul>
        </nav>
      </header> 
        <Routes>
          
        <Route path='about-me' element={<AboutMe />} />
        <Route path='projects' element={<Experience repositories={repositories}/>} />
        <Route path='social-media' element={<FindSocialMedia socialMedia={socialMedia} />} />
      </Routes>
      </BrowserRouter>
    </div>

    
  );
}

export default App;

