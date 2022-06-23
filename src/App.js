// import React from 'react';
// import './App.css';
// import NavBar from './components/NavBar';


// function App() {
//   const socialMedia = [
//     {
//       name: "LinkedIn",
//       url: 'https://www.linkedin.com/in/sofia-ignatiadi-781a2116a/'
//     },
//     {
//       name:'GitHub',
//       url: 'https://github.com/sofiaIG'
//     },
//     {
//       name:"HackerRank",
//       url: "https://www.hackerrank.com/sphignatiadi"
//     }
//   ]

//   const repositories = [
//     {
//       name:'Ghibli Film',
//       url: 'https://github.com/sofiaIG/Week7-WeekendHW/tree/main/src'
//     },
//     {
//       name: 'Plant Inventory',
//       url: 'https://github.com/sofiaIG/Shop_Inventory'
//     }
//     ,
//     {
//       name: 'MSM Shares',
//       url : "https://github.com/sofiaIG/MSM-Shares"
//     }
//     ,
//     {
//       name:"Muse",
//       url:"https://github.com/sofiaIG/muse-app"
//     }



//   ]

//   return (
//     <div>
//       <NavBar repositories={repositories} socialMedia = {socialMedia}/>

    
//     </div>

    
//   );
// }

// export default App;


import React from 'react';
import './App.css';
import Navbar from './components/NavBar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Experience from "./components/Experience";
import FindSocialMedia from "./components/FindSocialMedia";
import AboutMe from "./components/AboutMe";
import Home from './components/Home';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact component={Home} />
          <Route path='/about-me' component={AboutMe} />
          <Route path='/social-media' component={FindSocialMedia} />
          <Route path='/projects' component={Experience} />
          <Route path='/social-media' component={FindSocialMedia} />

        </Routes>
      </Router>
    </>
  );
}

export default App;

