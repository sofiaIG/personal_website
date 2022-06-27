import React from "react";


const Projects = ({ repositories }) => {
  return (
    <div id="projects">
      <h1>Projects</h1>
      <ul className="links">
        <h2>Projects that I have built before CodeClan</h2>
        <li><a href="https://github.com/sofiaIG/mortgage-calculator">
          Morgage Calculator in Java
        </a></li>
        <li><a href="https://github.com/sofiaIG/Blog">Django Blog</a></li>
        <li><a href="https://github.com/sofiaIG/TicTacToe">TicTacToe</a></li>
        <li><a href="https://github.com/sofiaIG/FilmRatingFinder">
          FilmRatingFinder
        </a></li>
      </ul>
        <ul>
        <h2>CodeClan Projects</h2>
        <li><a href="https://github.com/sofiaIG/Shop_Inventory">Plant Inventory</a></li>
        <li><a href="https://github.com/sofiaIG/MSM-Shares">MSM Shares</a></li>
        <li><a href="https://github.com/sofiaIG/muse-app">Muse</a></li>
      </ul>
    </div>
  );
};

export default Projects;
