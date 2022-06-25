import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import {BsStack} from 'react-icons/bs'



export const SidebarData = [

  {
    title: 'About me',
    path: 'about-me',
    icon: <IoIcons.IoIosPerson />,
    cName: 'nav-text'
  },
 
  {
    title: 'Tech stack',
    path: 'tech-stack',
    icon: <BsStack />,
    cName: 'nav-text'
  },
  {
    title: 'Projects',
    path: 'projects',
    icon: <IoIcons.IoIosRocket color='white' />,
    cName: 'nav-text'
  },
  {
    title: 'Contact me',
    path: 'social-media',
    icon: <IoIcons.IoIosPersonAdd />,
    cName: 'nav-text'
  },


];