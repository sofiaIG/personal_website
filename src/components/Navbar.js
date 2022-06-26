import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from './SidebarData';
import './Navbar.css';
import { IconContext } from 'react-icons';
import { Link } from 'react-scroll';
import { saveAs } from "file-saver";

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  const saveFile = () => {
    saveAs(
      "C:/Users/ignat/Documents/Projects/personal_website/src/cv",
      "CVSofiaIg.pdf"
    );
  };

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>
          <button onClick={showSidebar} className='menu-bars'>
            <FaIcons.FaBars />
          </button>
          <button className='download' onClick={saveFile}>Download CV</button>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <button className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </button>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link onClick={showSidebar} smooth duration={distance => Math.abs(distance)} to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
