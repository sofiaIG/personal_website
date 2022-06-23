import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';



export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'About Me',
    path: '/about-me',
    icon: <IoIcons.IoIosPerson />,
    cName: 'nav-text'
  },
  {
    title: 'Social Media',
    path: '/social-media',
    icon: <IoIcons.IoIosPersonAdd />,
    cName: 'nav-text'
  },
  {
    title: 'Projects',
    path: '/projects',
    icon: <IoIcons.IoIosRocket color='white' />,
    cName: 'nav-text'
  }

];