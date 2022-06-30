import React from "react";
import "../App.css"


const Projects = ({ repositories }) => {
  return (
    <div id="projects">
      <h1>Projects</h1>
      <h2>CodeClan Projects</h2>
      <ul className="projects">
        <li><a href="https://github.com/sofiaIG/Shop_Inventory">🌱 Plant Inventory</a></li>
        <li><a href="https://github.com/sofiaIG/MSM-Shares">💸 MSM Shares</a></li>
        <li><a href="https://github.com/sofiaIG/muse-app">🎵 Muse</a></li>
      </ul>
      <h2>Projects that I have built before CodeClan</h2>
      <ul className="projects">
        <li><a href="https://github.com/sofiaIG/mortgage-calculator">
        🏠 Morgage Calculator
        </a></li>
        <li><a href="https://github.com/sofiaIG/Blog">🖊️ Blog</a></li>
        <li><a href="https://github.com/sofiaIG/TicTacToe">🎲 TicTacToe</a></li>
        <li><a href="https://github.com/sofiaIG/FilmRatingFinder">
        📽️ Film Rating Finder
        </a></li>
      </ul>

    </div>
  );
};

export default Projects;
