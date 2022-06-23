import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Experience from "./components/Experience";
import FindSocialMedia from "./components/FindSocialMedia";
import AboutMe from "./components/AboutMe";
import Home from "./components/Home";

function App() {
  const socialMedia = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/sofia-ignatiadi-781a2116a/",
    },
    {
      name: "GitHub",
      url: "https://github.com/sofiaIG",
    },
    {
      name: "HackerRank",
      url: "https://www.hackerrank.com/sphignatiadi",
    },
  ];

  const repositories = [
    {
      name: "Ghibli Film",
      url: "https://github.com/sofiaIG/Week7-WeekendHW/tree/main/src",
    },
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
    <>
      <Router >
        <Navbar />
        <Routes >
          <Route path="/" exact component={<Home />} />
          <Route path="/about-me" exact element={<AboutMe />} />
          <Route
            path="/social-media"
            element={<FindSocialMedia socialMedia={socialMedia} />}
          />
          <Route
            path="/projects"
            element={<Experience repositories={repositories} />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
