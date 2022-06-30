import React from "react";
import "../App.css";

const Projects = ({ repositories }) => {
  return (
    <div id="projects">
      <h1>Projects</h1>
      <h2>CodeClan Projects</h2>
      <ul className="projects">
        <li>
          <a href="https://github.com/sofiaIG/Shop_Inventory">
            <span role="img" aria-label="plant">
              🌱
            </span>{" "}
            Plant Inventory
          </a>
        </li>
        <li>
          <a href="https://github.com/sofiaIG/MSM-Shares">
            <span role="img" aria-label="wing-money">
              💸
            </span>{" "}
            MSM Shares
          </a>
        </li>
        <li>
          <a href="https://github.com/sofiaIG/muse-app">
            <span role="img" aria-label="music-note">
              🎵
            </span>{" "}
            Muse
          </a>
        </li>
      </ul>
      <h2>Projects that I have built before CodeClan</h2>
      <ul className="projects">
        <li>
          <a href="https://github.com/sofiaIG/mortgage-calculator">
            <span role="img" aria-label="home">
              🏠
            </span>{" "}
            Morgage Calculator
          </a>
        </li>
        <li>
          <a href="https://github.com/sofiaIG/Blog">
            <span role="img" aria-label="pen">
              🖊️
            </span>{" "}
            Blog
          </a>
        </li>
        <li>
          <a href="https://github.com/sofiaIG/TicTacToe">
            <span role="img" aria-label="dice">
              🎲
            </span>{" "}
            TicTacToe
          </a>
        </li>
        <li>
          <a href="https://github.com/sofiaIG/FilmRatingFinder">
            <span role="img" aria-label="camera">
              📽️
            </span>{" "}
            Film Rating Finder
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Projects;
